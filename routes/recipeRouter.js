const express = require('express')
const recipeRouter = express.Router()
const Recipe = require('../models/recipe.js')

recipeRouter.get('/', (req, res, next) => {
  recipe.find((err, recipes) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(recipes)
  })
})

recipeRouter.post('/', (req, res, next) => {
  const newRecipe = new Recipe(req.body)
  newRecipe.save((err, savedRecipe) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedRecipe)
  })
})

recipeRouter.get('/:recipeId', (req, res, next) => {
  Recipe.findById(req.params.recipeId, (err, recipe) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(recipe)
  })
})

recipeRouter.delete('/:recipeId', (req, res, next) => {
  recipe.findByIdAndRemove(req.params.recipeId, (err, recipe) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    const response = {
      message: "recipe successfully deleted",
      id: recipe._id
    }
    return res.status(200).send(response) 
  })
})

module.exports = recipeRouter
