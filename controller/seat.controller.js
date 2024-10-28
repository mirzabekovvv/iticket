  const { Seat, Seat_type,Venuee } = require("../models");
const { validateSeat } = require("../validation/seat.validation");

exports.createSeatt = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const seat = await Seat.create(req.body);
    res.status(201).send(seat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeatt = async (req, res) => {
  try {
    const seat = await Seat.findAll();
    res.status(200).send(seat);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

exports.getSeattById = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id, {
      include: [
        {
          model: Seat_type,
          as: "seatType",
          // attributes: ["id", "name"],
        },
        {
          model: Venuee,
          as: "venueType",
        //   attributes: ["id", "name"],
        },
      ],
    });
    if (!seat) return res.status(404).send("seat not found");
    res.status(200).send(seat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updataSeatt = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).send("seat not found");
    await seat.update(req.body);
    res.status(200).send(seat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSeatt = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).send("seat not found");

    const seatData = seat.toJSON();

    await seat.destroy();
    res.status(204).send(seatData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
