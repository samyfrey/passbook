const mongoose = require('mongoose')

const budgetSchema = new mongoose.Schema(
	{
		type: {
			type: String,

		},
		amount: {
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

module.exports = mongoose.model('Budget', budgetSchema)
