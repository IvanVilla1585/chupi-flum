const Joi = require('joi');
const { send, json } = require( 'micro' );

// PROVIDERS
const schemaProviders = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  fax: Joi.string().optional(),
	companyEmail: Joi.string().optional(),
	contactName: Joi.string().required(),
	contactLastName: Joi.string().optional(),
	contactPhone: Joi.string().required(),
	contactEmail: Joi.string().optional()
})

const validator = (schema) => fn => async (req, res, params) => {
  const body = await json(req)
  const error = Joi.validate(body, schema).error

  if (error) {
    send(res, 400, { errors: true, message: error.details[0].message })
    return;
  }

  return fn(req, res, params);
}

module.exports = {
  validatorProviders : validator(schemaProviders),
}
