const express = require('express')
const passport = require('passport')

const Budget = require('../models/budget')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET /budget
router.get('/budget', (req, res, next) => {
	Budget.find()
		.then(handle404)

		.then((budget) => res.status(200).json({ budget }))
		.catch(next)
})

// SHOW
// GET /budget/:budgetId
router.get('/budget/:budgetId', (req, res, next) => {
	Budget.findById(req.params.budgetId)
		.then(handle404)

		.then((budget) => res.status(200).json({ budget }))
		.catch(next)
})


// CREATE
// POST /budget
router.post('/budget', requireToken, (req, res, next) => {
	req.body.owner = req.user.id

	Budget.create(req.body.budget)
		.then((budget) => {
			res.status(201).json({ budget })
		})
		.catch(next)
})

// UPDATE
// PATCH /budget/
router.patch('/budget/:budgetId', (req, res, next) => {
//  delete req.body.budget.owner

 Budget.findById(req.params.budgetId)
		.then(handle404)
		// .then(budget=> requireOwnership(req, budget))
		.then(budget=> budget.updateOne(req.body.budget))
		.then(() => res.sendStatus(204))
		.catch(next)
})

//DELETE
// /budget/:budgetId

router.delete(
	'/budget/:budgetId',
	requireToken,
	removeBlanks,
	(req, res, next) => {
		Budget.findById(req.params.budgetId)
			.then(handle404)
			.then(budget => requireOwnership(req, budget))
			.then(budget => budget.deleteOne())
			.then(() => res.sendStatus(204))
			.catch(next)
	}
)

module.exports = router
