const { validateFlat } = require("../validation/Flat.validation");
const { Flat } = require("../models")
exports.createFlat = async (req, res) => {
  const { error } = validateFlat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const flat = await Flat.create(req.body);
    res.status(201).send(flat);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getFlat = async (req, res) => {
  try {
    const flat = await Flat.findAll();
    res.status(200).send(flat);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getFlatById = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);
    if (!flat) return res.status(404).send("flat not found");
    res.status(200).send(flat);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateFlat = async (req, res) => {
  const { error } = validateFlat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const flat = await Flat.findByPk(req.params.id);
    if (!flat) return res.status(404).send("flat not found");

    await flat.update(req.body);
    res.status(200).send(flat);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteFlat = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);
    if (!flat) return res.status(404).send("flat not found");

    const FlatData = flat.toJSON();

    await flat.destroy();
    res.status(204).send(FlatData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};