'use strict'

const BaseModel = use('MongooseModel')
const Point = use('App/Models/Point').schema
/**
 * @class Dev
 */
class Dev extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'DevHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }

  /**
   * Disable timestamps for the Token Model
   *
   * @readonly
   * @static
   */
  static get timestamps() {
    return false
  }

  /**
   * Dev's schema
   */
  static get schema() {
    return {
      name: String,
      github_username: String,
      bio: String,
      avatar_url: String,
      techs: [String],
      location: {
        type: Point,
        index: '2dsphere'
      }
    }
  }
}

module.exports = Dev.buildModel('Dev')
