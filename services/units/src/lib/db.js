const mongoose = require('mongoose');
const config = require('../config');
require('./model');

const db = fn => async(req, res, params) => {
	const options = {useMongoClient: true};
	const conn = await mongoose.createConnection(config.db, options);

	// expose connection
	req.Model = conn.model('Unit');

	// close connection
	res.on('finish', () => {
		conn.close();
	});

	return fn(req, res, params);
};

module.exports = db;
