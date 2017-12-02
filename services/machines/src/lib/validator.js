const Joi = require('joi');
const { send, json } = require( 'micro' );

// MACHINES
const schemaMachines = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  capacity: Joi.number().min(0).required(),
  unit: Joi.string().required(),
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
  validatorMachines : validator(schemaMachines),
}
