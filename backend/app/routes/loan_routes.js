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
// GET /loans
router.get('/loans', requireToken, (req, res, next) => {
	Client.find()
		.then((clients) => res.status(200).json({ clients: clients }))
		.catch(next)
})

// SHOW
// GET /examples/5a7db6c74d55bc51bdf39793
router.get('/examples/:id', requireToken, (req, res, next) => {
	// req.params.id will be set based on the `:id` in the route
	Example.findById(req.params.id)
		.then(handle404)
		// if `findById` is succesful, respond with 200 and "example" JSON
		.then((example) => res.status(200).json({ example: example }))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// CREATE
// POST /loans
router.post('/loans', requireToken, (req, res, next) => {
	const loanData = req.body.loan
	const borrowerId = loanData.borrowerId

	Client.findById(borrowerId)
		.then(handle404)
		.then(client => {
			client.loans.push(loanData)
			return client.save()
		})
		.then(client => res.status(201).json({ client }))
		.catch(next)
})

// UPDATE
// PATCH /examples/5a7db6c74d55bc51bdf39793
router.patch('/examples/:id', requireToken, removeBlanks, (req, res, next) => {
	delete req.body.example.owner

	Example.findById(req.params.id)
		.then(handle404)
		.then((example) => requireOwnership(req, example))
		.then((example) => example.updateOne(req.body.example))
		.then(() => res.sendStatus(204))
		.catch(next)
})

// DESTROY
// DELETE /examples/5a7db6c74d55bc51bdf39793
router.delete('/examples/:id', requireToken, (req, res, next) => {
	Example.findById(req.params.id)
		.then(handle404)
		.then((example) => requireOwnership(req, example))
		.then((example) => example.deleteOne())
		.then(() => res.sendStatus(204))
		.catch(next)
})

module.exports = router