'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Point
 */
class Point extends BaseModel {
  /**
   * Exclude created_at and updated_at from the model
   */
  static get timestamps() {
    return false
  }

  /**
   * Point's schema
   */
  static get schema() {
    return {
      type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
  }
}

module.exports = Point.buildModel('Point')
