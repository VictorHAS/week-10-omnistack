'use strict'

const axios = require('axios')
const Dev = use('App/Models/Dev')

const { findConnections, sendMessage } = require('../../../start/socket')

class DevController {
  async index() {
    const devs = await Dev.find()
    return devs
  }

  async store({ request }) {
    const { github_username, techs, latitude, longitude } = request.all()

    let dev = await Dev.findOne({ github_username })

    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      )

      // eslint-disable-next-line no-undef
      const { name = login, avatar_url, bio } = apiResponse.data

      const techsArray = techs.split(',').map(tech => tech.trim())

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      })
      const sendSocketMessageTo = findConnections(
        {
          latitude,
          longitude
        },
        techsArray
      )

      sendMessage(sendSocketMessageTo, 'new-dev', dev)
    }

    return dev
  }

  async update({ response, request, params }) {
    const { github: github_username } = params
    let dev = await Dev.findOne({ github_username })

    if (!dev) {
      return response.status(404).json({
        message: { error: 'Desenvolvedor não encontrado com esse github!' }
      })
    }

    const { latitude, longitude, techs, ...rest } = request.post()

    rest.github_username = github_username
    let location = {}
    let techsArray = []
    if (latitude && longitude) {
      location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }
    }
    if (techs) {
      techsArray = techs.split(',').map(tech => tech.trim())
    }

    dev = await Dev.findOneAndUpdate(
      { github_username },
      {
        location: latitude && longitude ? location : dev.location,
        techs: techs ? techsArray : dev.techs,
        ...rest
      },
      {
        new: true
      }
    )

    return dev
  }

  async destroy({ response, params }) {
    const { github: github_username } = params

    const dev = await Dev.findOneAndDelete({ github_username })

    if (!dev) {
      return response.status(404).json({
        message: { error: 'Desenvolvedor não encontrado com esse github!' }
      })
    }
  }
}

module.exports = DevController
