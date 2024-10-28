const Joi = require("joi")

const validateDistrict = (Diskrict) =>{
 const schema = Joi.object({
  name: Joi.string().required(),
  region_id: Joi.number().required(),
 })
  return schema.validate(Diskrict)
}

module.exports = { validateDistrict };