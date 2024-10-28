const Joi = require("joi")

const validateCard = (card) =>{
 const schema = Joi.object({
  ticket_id: Joi.number().required(),
  customer_id: Joi.number().required(),
  createdAt: Joi.date(),
  finishedAt: Joi.date(),
  status_id: Joi.number().required(),
 })
  return schema.validate(card)
}

module.exports = { validateCard };