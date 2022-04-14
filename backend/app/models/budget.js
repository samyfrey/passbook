const mongoose = require('mongoose')

const budgetSchema = new mongoose.Schema(
	{
		creditBudget: {
			type: Number,

		},
		revenueBudget: {
			type: Number,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		}
        
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Client', clientSchema)
