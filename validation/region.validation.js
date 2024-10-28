const Joi = require("joi")

const validateRegion = (Region) =>{
 const schema = Joi.object({
  name: Joi.string().required(),
  postpone: Joi.number().required(),
 })
  return schema.validate(Region)
}

module.exports = { validateRegion };