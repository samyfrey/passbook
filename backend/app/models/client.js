const mongoose = require('mongoose')

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
        loans: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Loan'
        }
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

module.exports = mongoose.model('Client', clientSchema)
