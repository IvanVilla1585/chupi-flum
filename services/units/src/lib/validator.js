const Joi = require('joi');
const { send, json } = require( 'micro' );

// UNITS 
const schemaUnits = Joi.object({
  name: Joi.string().required(),
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
  validatorUnits : validator(schemaUnits),
} 
