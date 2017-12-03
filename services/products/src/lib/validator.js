const Joi = require('joi');
const { send, json } = require( 'micro' );

// PRODUCTS
const schemaProducts = Joi.object({
  name: Joi.string().required(),
	description: Joi.string().optional(),
	unit: Joi.string().required(),
	category: Joi.string().required(),
	quantity: Joi.number().min(0).optional(),
	stock: Joi.number().min(1).required(),
	quantityFormula: Joi.number().min(1).required(),
	presentation: Joi.string().required(),
	process: Joi.array().items(Joi.string().required()).required(),
	formula: Joi.array().items(Joi.object().keys({
		material: Joi.string().required(),
		unit: Joi.string().required(),
		quantity: Joi.number().required(),
	})).required()
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
  validatorProducts : validator(schemaProducts),
}
