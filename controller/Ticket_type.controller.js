const { validateTicket_type } = require("../validation/Ticket_type.validation");
const { Ticket_type, Ticket } = require("../models")
exports.createTicket_type = async (req, res) => {
  const { error } = validateTicket_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket_type = await Ticket_type.create(req.body);
    res.status(201).send(ticket_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getTicket_type = async (req, res) => {
  try {
    const ticket_type = await Ticket_type.findAll();
    res.status(200).send(ticket_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getTicket_typeById = async (req, res) => {
  try {
    const ticket_type = await Ticket_type.findByPk(req.params.id,);
    if (!ticket_type) return res.status(404).send("ticket_type not found");
    res.status(200).send(ticket_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateTicket_type = async (req, res) => {
  const { error } = validateTicket_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket_type = await Ticket_type.findByPk(req.params.id);
    if (!ticket_type) return res.status(404).send("ticket_type not found");

    await ticket_type.update(req.body);
    res.status(200).send(ticket_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteTicket_type = async (req, res) => {
  try {
    const ticket_type = await Ticket_type.findByPk(req.params.id);
    if (!ticket_type) return res.status(404).send("ticket_type not found");

    const Ticket_typeData = ticket_type.toJSON();

    await ticket_type.destroy();
    res.status(204).send(Ticket_typeData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};