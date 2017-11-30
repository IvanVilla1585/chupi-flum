const mongoose = require('mongoose');
const Promise = require('bluebird');

const config = require('../config');
require('./model'); // load mongoose model

// User bluebird promise instead
mongoose.Promise = Promise;

/**
 * Connect to mongoDB and bind model to req, and continue with
 * request, puts a event to close connection once the request is finish.
 *
 * @returns <Promise Response>
 */
const db = fn => async(req, res, next) => {

  const options = {useMongoClent: true};
  const connection = await mongoose.createConnection(config.db, options);

  // Expose user model
  req.Model = connection.model('User');

  //close connection
  res.on('finish', () => {
    connection.close();
  });

  return fn(req, res, next);
}

module.exports = db;
