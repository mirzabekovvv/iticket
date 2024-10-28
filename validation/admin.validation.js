const Joi = require("joi")

const validateAdmin = (admin) =>{
 const schema = Joi.object({
  name: Joi.string().min(3).required(),
  login: Joi.string().required(),
  hashed_password: Joi.string().required(),
  is_active: Joi.string().required(),
  is_creator: Joi.string().required(),
  hashed_refresh_token: Joi.string().required(),
 })
  return schema.validate(admin)
}

module.exports = { validateAdmin };