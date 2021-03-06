const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema(
	{
		description: {
			type: String,
			// required: true
		},
		month: {
			type: String
		},
		amount: {
			type: Number,
			// required: true,
		},
		revenue: {
			type: Number,
			// required: true,
		},
		status: {
			type: String
		},
        borrower: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Client',
		},
	},
	{
		timestamps: true,
	}
)

module.exports = loanSchema
