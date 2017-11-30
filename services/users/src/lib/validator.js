const Joi = require('joi');
const { send, json } = require( 'micro' );

// Y
const schemaUser = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
	type: Joi.string().required(),
  rol: Joi.string().required(),
	mobilePhone: Joi.string(),
  address: Joi.string(),
  phone: Joi.string().required(),
});

const validator = (schema) => fn => async (req, res, params) => {
  const body = await json(req)
  const error = Joi.validate(body, schema).error

  if (error) {
    send(res, 400, { errors: true, message: error.details[0].message });
    return;
  }

  return fn(req, res, params);
};

module.exports = {
	schemaUser : validator(schemaUser),
};
