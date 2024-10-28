const { validateStatus } = require("../validation/status.validation");
const { Status } = require("../models")
exports.createStatus = async (req, res) => {
  const { error } = validateStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const status = await Status.create(req.body);
    res.status(201).send(status);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getStatus = async (req, res) => {
  try {
    const status = await Status.findAll();
    res.status(200).send(status);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getStatusById = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).send("Status not found");
    res.status(200).send(status);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateStatus = async (req, res) => {
  const { error } = validateStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).send("Status not found");

    await status.update(req.body);
    res.status(200).send(status);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteStatus = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).send("Status not found");

    const statusData = status.toJSON();

    await status.destroy();
    res.status(204).send(statusData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};