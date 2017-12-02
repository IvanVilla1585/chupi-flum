const Joi = require('joi');
const { send, json } = require( 'micro' );

// PRESENTATIONS
const schemaPresentations = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
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
  validatorPresentations : validator(schemaPresentations),
}
