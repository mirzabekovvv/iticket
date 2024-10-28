const Joi = require("joi")

const validateHuman = (human) =>{
 const schema = Joi.object({
  name: Joi.string().min(3).required(),
  start_age: Joi.string().required(),
  finish_age: Joi.string().required(),
  gender_id: Joi.number().required(),
 })
  return schema.validate(human)
}

module.exports = { validateHuman };