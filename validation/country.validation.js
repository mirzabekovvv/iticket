const Joi = require("joi")

const validateCountry = (Country) =>{
 const schema = Joi.object({
  country: Joi.string().required(),
 })
  return schema.validate(Country)
}

module.exports = { validateCountry };