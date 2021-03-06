const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: true
  },
  instructions: {
    type: Array,
    required: true
  },
  servings: {
    type: Number,
    required: true
  },
  readyInMinutes: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  vegetarian: Boolean,
  vegan: Boolean,
  glutenFree: Boolean,
  dairyFree: Boolean,
  healthScore: Number
})

module.exports = mongoose.model('Recipe', recipeSchema)