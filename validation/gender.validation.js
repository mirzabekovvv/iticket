const Joi = require("joi")

const validateGender = (gender) =>{
 const schema = Joi.object({
  name: Joi.string().min(2).required(),
 })
  return schema.validate(gender)
}

module.exports = { validateGender };