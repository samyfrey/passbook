const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema(
	{
		description: {
			type: String,
			required: true,
			unique: true,
		},
		amount: {
			type: Number,
			required: true,
		},
        closingDate: {
            type: Date,
            required: true
        },
        borrower: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Client',
		},
	},
	{
		timestamps: true,
		toJSON: {
			// remove `hashedPassword` field when we call `.toJSON`
			transform: (_doc, user) => {
				delete user.hashedPassword
				return user
			},
		},
	}
)

module.exports = loanSchema
