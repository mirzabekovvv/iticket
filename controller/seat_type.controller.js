const { Seat_type } = require("../models")
const { validateSeat_type } = require("../validation/Seat_type.validation");

exports.createSeat = async (req, res) => {
    const { error } = validateSeat_type(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const seat = await Seat_type.create(req.body);
        res.status(201).send(seat);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

exports.getSeat = async (req, res) => {
    try {
        const seat = await Seat_type.findAll();
        res.status(200).send(seat)
    } catch (error) { 
     res.status(500).send(err.message)
    }
}

exports.getSeatById = async(req, res) =>{
 try{
  const seat = await Seat_type.findByPk(req.params.id)
  if (!seat) return res.status(404).send("seat not found");
  res.status(200).send(seat);
 }catch (error) {
  res.status(500).send(error.message)
 }
}

exports.updataSeat = async (req , res) => {
 const { error } = validateSeat_type(req.body);
 if (error) return res.status(400).send(error.details[0].message);
 try{
  const seat = await Seat_type.findByPk(req.params.id);
  if (!seat) return res.status(404).send("seat not found");
  await seat.update(req.body);
  res.status(200).send(seat);
  } catch (error) {
  res.status(500).send(error.message);
  }
};

exports.deleteSeat = async (req , res) => {
 try{
 const seat = await Seat_type.findByPk(req.params.id);
 if (!seat) return res.status(404).send("seat not found")
 
 const seatData = seat.toJSON();
 
 await seat.destroy();
 res.status(204).send(seatData);
 } catch (error) {
 res.status(500).send(error.message);
 }
};