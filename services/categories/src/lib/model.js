const mongoose = require('mongoose');

const CODES = ['PRODUCT', 'MATERIAL'];
const STATUS = ['ACTIVE', 'INACTIVE'];

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	code: {
		type: String,
		enum: CODES,
		required: true,
		unique: true,
		uppercase: true,
		index: true
	},
	status: {
		type: String,
		enum: STATUS,
		default: STATUS[0]
	}
}, { timestamps: true });

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

module.exports = mongoose.model('Category', schema);

