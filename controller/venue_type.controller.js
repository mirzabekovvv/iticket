const { validateVenue } = require("../validation/Venue_type");
const { Venue_type, } = require("../models")
exports.createvenue = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue = await Venue_type.create(req.body);
    res.status(201).send(venue);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getvenue = async (req, res) => {
  try {
    const venue = await Venue_type.findAll();
    res.status(200).send(venue);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getvenueById = async (req, res) => {
  try {
    const venue = await Venue_type.findByPk(req.params.id);
    if (!venue) return res.status(404).send("venue not found");
    res.status(200).send(venue);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updatevenue = async (req, res) => {
  const { error } = validatvenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue = await Venue_type.findByPk(req.params.id);
    if (!venue) return res.status(404).send("venue not found");

    await venue.update(req.body);
    res.status(200).send(venue);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteVenue = async (req, res) => {
  try {
    const venue = await Venue_type.findByPk(req.params.id);
    if (!venue) return res.status(404).send("venue not found");

    const VenueData = venue.toJSON();

    await venue.destroy();
    res.status(204).send(VenueData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};