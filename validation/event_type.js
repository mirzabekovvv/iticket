const Joi = require("joi")

const validateEvent = (event) =>{
 const schema = Joi.object({
  name: Joi.string().min(3).required(),
  parent_event_type_id: Joi.number().min(3).required(),
 })
  return schema.validate(event)
}

module.exports = { validateEvent };