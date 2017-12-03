const mongoose = require('mongoose');
const Promise = require('bluebird');
const config = require('../config');
require('./models/modelProduct');
require('./models/modelFormula');

const db = fn => async(req, res, params) => {
	const options = {useMongoClient: true};
	const conn = await mongoose.createConnection(config.db, options);

	// expose connection
	req.ModelProduct = conn.model('Product');
	req.ModelFormula = conn.model('Formula');

	// close connection
	res.on('finish', () => {
		conn.close();
	});

	return fn(req, res, params);
};

module.exports = db;
