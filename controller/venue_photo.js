const { Venue_photo, Venuee} = require("../models")
const { validateVenue_photo } = require("../validation/venue_photo");
exports.createvenue_photo = async (req, res) => {
  const { error } = validateVenue_photo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue_photo = await Venue_photo.create(req.body);
    res.status(201).send(venue_photo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getvenue_photo = async (req, res) => {
  try {
    const venue_photo = await Venue_photo.findAll();
    res.status(200).send(venue_photo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getvenue_photoById = async (req, res) => {
  try {
    const venue_photo = await Venue_photo.findByPk(req.params.id,
      {
        include: [
          {
            model: Venuee,
            as: "Venue_type",
          },
        ],
      });
    if (!venue_photo) return res.status(404).send("venue_photo not found");
    res.status(200).send(venue_photo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updatevenue_photo = async (req, res) => {
  const { error } = validateVenue_photo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue_photo = await Venue_photo.findByPk(req.params.id);
    if (!venue_photo) return res.status(404).send("venue_photo not found");

    await venue_photo.update(req.body);
    res.status(200).send(venue_photo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteVenue_photo = async (req, res) => {
  try {
    const venue_photo = await Venue_photo.findByPk(req.params.id);
    if (!venue_photo) return res.status(404).send("venue_photo not found");

    const Venue_photoData = venue_photo.toJSON();

    await venue.destroy();
    res.status(204).send(Venue_photoData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};