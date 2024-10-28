const Joi = require("joi");

const validateCustomer_card = (customer_card) =>{
 const schema = Joi.object({
  name: Joi.string().min(3).required(),
  phone: Joi.number().required(),
  number: Joi.number().required(),
  year: Joi.string().required(),
  month: Joi.string().required(),
  is_active: Joi.boolean().required(),
  is_main: Joi.boolean().required(),
 })
  return schema.validate(customer_card)
}

module.exports = { validateCustomer_card };