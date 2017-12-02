

const mongoose = require('mongoose');

const STATUS = ['ACTIVE', 'INACTIVE'];

const schema = new mongoose.Schema({
	_id: {
		type: String,
		required: true,
		unique: true,
		index: true
	},
	name: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	fax: {
		type: String
	},
	companyEmail: {
		type: String
	},
	contactName: {
		type: String,
		required: true
	},
	contactLastName: {
		type: String
	},
	contactPhone: {
		type: String,
		required: true
	},
	contactEmail: {
		type: String
	},
	status: {
		type: String,
		enum: STATUS,
		default: STATUS[0]
	}
});

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

module.exports = mongoose.model('Provider', schema);
