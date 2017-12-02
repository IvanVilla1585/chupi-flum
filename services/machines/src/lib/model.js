
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	description: {
		type: String
	},
	unit: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Unit',
		required: true
	},
	capacity: {
		type: Number,
		required: true
	}
}, {timestamps: true});

if (!schema.options.toJSON) schema.options.toJSON = {};

/**
 * Add a tranforma method to change _id by id
 * whent toJSON is used.
 */
schema.options.toJSON.transform = (doc, ret) => {
	// remove the _id of every document before returning the result
	ret.id = ret._id; // eslint-disable-line no-param-reassign
	delete ret._id; // eslint-disable-line no-param-reassign
	return ret;
};

module.exports = mongoose.model('Machine', schema);



