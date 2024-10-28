const { Diskrict, Region} = require("../models")
const { validateDistrict } = require("../validation/Diskrict.validation");
exports.createDiskrict = async (req, res) => {
  const { error } = validateDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const diskrict = await Diskrict.create(req.body);
    res.status(201).send(diskrict);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getDiskrict = async (req, res) => {
  try {
    const diskrict = await Diskrict.findAll();
    res.status(200).send(diskrict);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getDiskrictById = async (req, res) => {
  try {
    const diskrict = await Diskrict.findByPk(req.params.id,
      {
        include: [
          {
            model: Region,
            as: "diskrictregion",
          },
        ],
      });
    if (!diskrict) return res.status(404).send("diskrict not found");
    res.status(200).send(diskrict);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateDiskrict = async (req, res) => {
  const { error } = validateDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const diskrict = await Diskrict.findByPk(req.params.id);
    if (!diskrict) return res.status(404).send("diskrict not found");

    await diskrict.update(req.body);
    res.status(200).send(diskrict);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteDiskrict = async (req, res) => {
  try {
    const diskrict = await Diskrict.findByPk(req.params.id);
    if (!diskrict) return res.status(404).send("diskrict not found");

    const diskrictData = diskrict.toJSON();

    await diskrict.destroy();
    res.status(204).send(diskrictData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};