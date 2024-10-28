const { Booking, Card, Status, Delivery, DisCount, Payment } = require("../models")
const { validateBooking } = require("../validation/booking");

exports.createBooking = async (req, res) => {
    const { error } = validateBooking(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const booking = await Booking.create(req.body);
        res.status(201).send(booking);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

exports.getBooking = async (req, res) => {
    try {
        const booking = await Booking.findAll();
        res.status(200).send(booking)
    } catch (error) { 
     res.status(500).send(err.message)
    }
}

exports.getBookingById = async(req, res) =>{
 try{
//   const booking = await Booking.findByPk(req.params.id)
  const booking = await Booking.findByPk(req.params.id, {
    include: [
      {
        model: Card,
        as: "bookingcard",
      },
      {
        model: Delivery,
        as: "bookingDelivery",
      },
      {
        model: DisCount,
        as: "bookingDisCount",
      },
      {
        model: Status,
        as: "bookingStatus",
      },
      {
        model: Payment,
        as: "bookingPayment",
      }
    ],
  });
  if (!booking) return res.status(404).send("booking not found");
  res.status(200).send(booking);
 }catch (error) {
  res.status(500).send(error.message)
 }
}

exports.updataBooking = async (req , res) => {
 const { error } = validateBooking(req.body);
 if (error) return res.status(400).send(error.details[0].message);
 try{
  const booking = await Booking.findByPk(req.params.id);
  if (!booking) return res.status(404).send("Booking not found");
  await booking.update(req.body);
  res.status(200).send(booking);
  } catch (error) {
  res.status(500).send(error.message);
  }
};

exports.deleteBooking = async (req , res) => {
 try{
 const booking = await Booking.findByPk(req.params.id);
 if (!booking) return res.status(404).send("Booking not found")
 
 const bookingData = booking.toJSON();
 
 await stuff.destroy();
 res.status(204).send(bookingData);
 } catch (error) {
 res.status(500).send(error.message);
 }
};