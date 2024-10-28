const { Card, Ticket, Customer, Status } = require("../models")
const { validateCard } = require("../validation/card.validation");

exports.createCard = async (req, res) => {
    const { error } = validateCard(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const card = await Card.create(req.body);
        res.status(201).send(card);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

exports.getCard = async (req, res) => {
    try {
        const card = await Card.findAll();
        res.status(200).send(card)
    } catch (error) { 
     res.status(500).send(err.message)
    }
}

exports.getCardById = async(req, res) =>{
 try{
  const card = await Card.findByPk(req.params.id,
    {
        include: [
          {
            model: Ticket,
            as: "cardticket",
          },
          {
            model: Customer,
            as: "cardcustomer",
          },
          {
            model: Status,
            as: "cardstatus",
          },
        ],
      })
  if (!card) return res.status(404).send("Card not found");
  res.status(200).send(card);
 }catch (error) {
  res.status(500).send(error.message)
 }
}

exports.updataCard = async (req , res) => {
 const { error } = validateCard(req.body);
 if (error) return res.status(400).send(error.details[0].message);
 try{
  const card = await Card.findByPk(req.params.id);
  if (!card) return res.status(404).send("Card not found");
  await card.update(req.body);
  res.status(200).send(card);
  } catch (error) {
  res.status(500).send(error.message);
  }
};

exports.deleteCard = async (req , res) => {
 try{
 const card = await Card.findByPk(req.params.id);
 if (!card) return res.status(404).send("Card not found")
 
 const cardData = card.toJSON();
 
 await stuff.destroy();
 res.status(204).send(cardData);
 } catch (error) {
 res.status(500).send(error.message);
 }
};