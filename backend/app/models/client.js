const mongoose = require('mongoose')
const loanSchema = require('./loan')

const clientSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		industry: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		creditLimit: {
			type: Number
		},
		loans: [loanSchema]
	},
	{
		timestamps: true,

	}
)

module.exports = mongoose.model('Client', clientSchema)
