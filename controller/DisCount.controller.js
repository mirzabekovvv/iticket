const { validateDisCount } = require("../validation/disCount.validation");
const { DisCount } = require("../models")
exports.createDisCount = async (req, res) => {
  const { error } = validateDisCount(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const discount = await DisCount.create(req.body);
    res.status(201).send(discount);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getDisCount = async (req, res) => {
  try {
    const discount = await DisCount.findAll();
    res.status(200).send(discount);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getDisCountById = async (req, res) => {
  try {
    const discount = await DisCount.findByPk(req.params.id);
    if (!discount) return res.status(404).send("discount not found");
    res.status(200).send(discount);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateDisCount = async (req, res) => {
  const { error } = validateDisCount(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const discount = await DisCount.findByPk(req.params.id);
    if (!discount) return res.status(404).send("discount not found");

    await discount.update(req.body);
    res.status(200).send(discount);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteDisCount = async (req, res) => {
  try {
    const discount = await DisCount.findByPk(req.params.id);
    if (!discount) return res.status(404).send("discount not found");

    const DisCountData = discount.toJSON();

    await discount.destroy();
    res.status(204).send(DisCountData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};