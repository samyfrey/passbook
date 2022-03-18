const express = require('express')
const passport = require('passport')

const Client = require('../models/client')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET /clients
router.get('/clients', (req, res, next) => {
	Client.find()
		.then(clients => res.status(200).json({ clients }))
		.catch(next)
})

// SHOW
// GET /clients/5a7db6c74d55bc51bdf39793
router.get('/clients/:borrowerId', requireToken, (req, res, next) => {
	Client.findById(req.params.borrowerId)
		.then(handle404)
		.then(client => res.status(200).json({ client }))
		.catch(next)
})

// CREATE
// POST /examples
router.post('/clients', requireToken, (req, res, next) => {
	req.body.client.owner = req.user.id

	Client.create(req.body.client)
		.then((client) => {
			res.status(201).json({ client })
		})
		.catch(next)
})

// UPDATE
// PATCH /examples/
router.patch('/clients/:borrowerId', requireToken, removeBlanks, (req, res, next) => {

	// delete req.body.client.owner

	Client.findById(req.params.borrowerId)
		.then(handle404)
		.then(client => requireOwnership(req, client))
		.then(client => client.updateOne(req.body.client))
		.then(() => res.sendStatus(204))
		.catch(next)
})



module.exports = router
