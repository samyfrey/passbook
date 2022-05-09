const express = require('express')
const crypto = require('crypto')
const passport = require('passport')
const bcrypt = require('bcrypt')

const bcryptSaltRounds = 10

const errors = require('../../lib/custom_errors')

const BadParamsError = errors.BadParamsError
const BadCredentialsError = errors.BadCredentialsError

const User = require('../models/user')


const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// SIGN UP
// POST /sign-up
router.post('/sign-up', (req, res, next) => {
  Promise.resolve(req.body.credentials)
    .then(credentials => {
      if (!credentials ||
          !credentials.password ||
          credentials.password !== credentials.password_confirmation) {
        throw new BadParamsError()
      }
    })
    .then(() => bcrypt.hash(req.body.credentials.password, bcryptSaltRounds))
    .then(hash => {
      return {
        email: req.body.credentials.email,
        hashedPassword: hash
      }
    })
    .then(user => User.create(user))
    .then(user => res.status(201).json({ user: user }))
    .catch(next)
})

// SIGN IN
// POST /sign-in
router.post('/sign-in', (req, res, next) => {
  const pw = req.body.credentials.password
  let user

  User.findOne({ email: req.body.credentials.email })
    .then(record => {
      if (!record) {
        throw new BadCredentialsError()
      }
      user = record
      return bcrypt.compare(pw, user.hashedPassword)
    })
    .then(correctPassword => {
      if (!correctPassword) {
        throw new BadCredentialsError()
      }

      const token = crypto.randomBytes(16).toString('hex')
      user.token = token
      return user.save()
    })
    .then(user => {
      res.status(201).json({ user: user })
    })
    .catch(next)
})

// CHANGE password
// PATCH /change-password
router.patch('/change-password', requireToken, (req, res, next) => {
  let user
  User.findById(req.user.id)
    .then(record => { user = record })
    .then(() => bcrypt.compare(req.body.passwords.old, user.hashedPassword))
    .then(correctPassword => {

      if (!req.body.passwords.new || !correctPassword) {
        throw new BadParamsError()
      }
    })
    .then(() => bcrypt.hash(req.body.passwords.new, bcryptSaltRounds))
    .then(hash => {
      user.hashedPassword = hash
      return user.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.delete('/sign-out', requireToken, (req, res, next) => {
  req.user.token = null
  req.user.save()
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
