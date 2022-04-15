const express = require('express')
const passport = require('passport')

const Client = require('../models/client')
const Loan = require('../models/loan')
const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET /loans
router.get('/loans', (req, res, next) => {
	Client.find()
		.then(loans => res.status(200).json({ loans }))
		.catch(next)
})

// SHOW
// GET /loans/5a7db6c74d55bc51bdf39793
router.get('/loans/:loanId', (req, res, next) => {
	const loanId = req.params.loanId
	const loanData = req.body.data
	console.log('loanData is', loanData)
	const clientId = loanData.borrowerId

	Client.findById(clientId)
		.then(handle404)

		.then(client => res.status(200).json({ client }))

		.then((client) => {
			const loan = client.loans.id(loanId)
			return loan
		})
		.then((loan) => res.status(200).json({ loan }))
		.catch(next)
})

// CREATE
// POST /loans
router.post('/loans/create', requireToken, (req, res, next) => {
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
// PATCH /loan/:id 
// body: need the borrowerId 

router.patch('/loans/:loanId', (req, res, next) => {
	const loanId = req.params.loanId
	const loanData = req.body.loan
	const borrowerId = loanData.borrowerId

	Client.findById(borrowerId)
		.then(handle404)
		.then(client => {
			const loan = client.loans.id(loanId)
			loan.set(loanData)
			return client.save()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

// DESTROY
// DELETE /loan/id
router.delete('/loans/:loanId', (req, res, next) => {
	const loanId = req.params.loanId
	const loanData = req.body.loan
	const borrowerId = loanData.borrowerId
	console.log('req body is', req)
	Client.findById(borrowerId)
		.then(handle404)
		// .then((client) => requireOwnership(req, client))
		.then((client) => {
			client.loans.id(loanId).remove()
			return client.save()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})
// router.delete('/loans/:loanId', (req, res, next) => {
// 	const loanId = req.params.loanId
// 	const borrowerId = req.body.loan.borrowerId

// 	Client.findById(borrowerId)
// 		.then(handle404)
// 		// .then((client) => requireOwnership(req, client))
// 		.then((client) => {
// 			client.loans.id(loanId).remove()
// 			return client.save()
// 		})
// 		.then(() => res.sendStatus(204))
// 		.catch(next)
// })

module.exports = router
