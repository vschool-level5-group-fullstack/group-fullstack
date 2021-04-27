const express = require('express')
const userRouter = express.Router()
const User = require('../models/user.js')

userRouter.get('/', (req, res, next) => {
  User.find((err, users) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(users)
  })
})

userRouter.get('/list', (req, res, next) => {
  User.find({}, 'firstName lastName', (err, users) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(users)
  })
})

userRouter.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId, (err, user) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(user)
  })
})

userRouter.post('/', (req, res, next) => {
  const newUser = new User(req.body)
  newUser.save((err, savedUser) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedUser)
  })
})

userRouter.put('/:userId', (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.userId, 
    req.body,
    (err, user) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.send(user)
  })
})

userRouter.delete('/:userId', (req, res, next) => {
  User.findByIdAndRemove(req.params.userId, (err, user) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    const response = {
      message: "User successfully deleted",
      id: user._id
    }
    return res.status(200).send(response) 
  })
})

module.exports = userRouter