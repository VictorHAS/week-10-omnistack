'use strict'

const Dev = use('App/Models/Dev')

class SearchController {
  async index({ request }) {
    const { latitude, longitude, techs } = request.all()

    const techsArray = techs.split(',').map(tech => tech.trim())

    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    })

    return devs
  }
}

module.exports = SearchController
