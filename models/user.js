const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  week: {
    monday: {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    },
    tuesday: {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    },
    wednesday: {
      type: Schema.Types.ObjectId,
      ref: 'Recipe' 
    },
    thursday: {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    },
    friday: {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    },
    saturday: {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    },
    sunday: {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    }
  }
})

module.exports = mongoose.model('User', userSchema)