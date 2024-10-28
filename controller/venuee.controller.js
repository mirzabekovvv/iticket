const { validateVenue } = require("../validation/venue.validation");
const { Venuee, Region, Diskrict, Venue_type } = require("../models");
exports.createvenuee = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const venuee = await Venuee.create(req.body);
    res.status(201).send(venuee);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getvenuee = async (req, res) => {
  try {
    const venuee = await Venuee.findAll();
    res.status(200).send(venuee);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getvenueeById = async (req, res) => {
  try {
    const venuee = await Venuee.findByPk(req.params.id, {
      include: [
        {
          model: Region,
          as: "VenueRegion",
        },
        {
          model: Diskrict,
          as: "VenueDistrict",
        },
        {
          model: Venue_type,
          as: "VenueVenue_type",
        },
      ],
    });
    if (!venuee) return res.status(404).send("venue not found");
    res.status(200).send(venuee);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updatevenuee = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venuee = await Venuee.findByPk(req.params.id);
    if (!venuee) return res.status(404).send("venue not found");

    await venuee.update(req.body);
    res.status(200).send(venuee);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteVenuee = async (req, res) => {
  try {
    const venuee = await Venuee.findByPk(req.params.id);
    if (!venuee) return res.status(404).send("venue not found");

    const VenueeData = venuee.toJSON();

    await venuee.destroy();
    res.status(204).send(VenueeData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
