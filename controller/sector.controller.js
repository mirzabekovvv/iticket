const { validateSector } = require("../validation/sector.validation");
const { Sector } = require("../models")
exports.createSector = async (req, res) => {
  const { error } = validateSector(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const sector = await Sector.create(req.body);
    res.status(201).send(sector);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getSector = async (req, res) => {
  try {
    const sector = await Sector.findAll();
    res.status(200).send(sector);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getSectorById = async (req, res) => {
  try {
    const sector = await Sector.findByPk(req.params.id);
    if (!sector) return res.status(404).send("sector not found");
    res.status(200).send(sector);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateSector = async (req, res) => {
  const { error } = validateSector(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const sector = await Sector.findByPk(req.params.id);
    if (!sector) return res.status(404).send("sector not found");

    await sector.update(req.body);
    res.status(200).send(sector);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteSector = async (req, res) => {
  try {
    const sector = await Sector.findByPk(req.params.id);
    if (!sector) return res.status(404).send("sector not found");

    const SectorData = sector.toJSON();

    await sector.destroy();
    res.status(204).send(SectorData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};