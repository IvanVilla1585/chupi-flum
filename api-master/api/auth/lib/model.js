const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const STATUS = ['ACTIVE', 'INACTIVE', 'NOT VERIFY'];
const TYPES = ['ADMINISTRATOR', 'OTHER'];

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  rol: {
    type: String,
  },
  username: {
    type: String,
  },
  type: {
    type: String,
    enum: TYPES
  },
  status: {
    type: String,
    enum: STATUS,
    default: STATUS[2],
  },
  mobilePhone: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  }
}, { timestamps: true });

/**
 * METHODS
 */
schema.method({
  // Compare password method
  comparePassword: function(candidatePass, cb) {
    bcrypt.compare(candidatePass, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
      return isMatch
    })
  },
  generateRandomPassword: function() {
    return this.password = Math.random().toString(36).slice(-8);
  },
});

if (!schema.options.toJSON) schema.options.toJSON = {};
// Encrypt password
schema.pre('save', function (next, done) {
  let user = this;

  // Only has the password if it has been modified or is new
  if (!user.isModified('password')) return next();

  // Generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if(err) return next(err);
    // Hash the password along with our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if(err) return next(err);
      // Override the cleartext password with the hashed one
      user.password = hash;
      next();
    })
  });
});

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

module.exports = mongoose.model('User', schema);

