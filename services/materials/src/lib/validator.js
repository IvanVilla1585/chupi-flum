const Joi = require('joi');
const { send, json } = require( 'micro' );

// MATERIALS
const schemaMaterials = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  unit: Joi.string().required(),
  category: Joi.string().required(),
  quantity: Joi.number().min(0).optional(),
  stock: Joi.number().min(1).required(),
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
  validatorMaterials : validator(schemaMaterials),
}
