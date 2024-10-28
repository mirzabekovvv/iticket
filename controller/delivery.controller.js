const { validateDelivery } = require("../validation/delivery.validation");
const { Delivery } = require("../models")
exports.createDelivery = async (req, res) => {
  const { error } = validateDelivery(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const delivery = await Delivery.create(req.body);
    res.status(201).send(delivery);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.findAll();
    res.status(200).send(delivery);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getDeliveryById = async (req, res) => {
  try {
    const delivery = await Delivery.findByPk(req.params.id);
    if (!delivery) return res.status(404).send("delivery not found");
    res.status(200).send(delivery);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateDelivery = async (req, res) => {
  const { error } = validateDelivery(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const delivery = await Delivery.findByPk(req.params.id);
    if (!delivery) return res.status(404).send("delivery not found");

    await delivery.update(req.body);
    res.status(200).send(delivery);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.findByPk(req.params.id);
    if (!delivery) return res.status(404).send("delivery not found");

    const DeliveryData = delivery.toJSON();

    await delivery.destroy();
    res.status(204).send(DeliveryData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};