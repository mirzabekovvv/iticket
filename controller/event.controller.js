const { Event_type } = require("../models")
const { validateEvent } = require("../validation/event_type");

exports.createEvent = async (req, res) => {
    const { error } = validateEvent(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const event = await Event_type.create(req.body);
        res.status(201).send(event);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

exports.getEvent = async (req, res) => {
    try {
        const event = await Event_type.findAll();
        res.status(200).send(event)
    } catch (error) { 
     res.status(500).send(err.message)
    }
}

exports.getEventById = async(req, res) =>{
 try{
  const event = await Event_type.findByPk(req.params.id)
  if (!event) return res.status(404).send("event not found");
  res.status(200).send(event);
 }catch (error) {
  res.status(500).send(error.message)
 }
}

exports.updataEvent = async (req , res) => {
 const { error } = validateEvent(req.body);
 if (error) return res.status(400).send(error.details[0].message);
 try{
  const event = await Event_type.findByPk(req.params.id);
  if (!event) return res.status(404).send("event not found");
  await event.update(req.body);
  res.status(200).send(event);
  } catch (error) {
  res.status(500).send(error.message);
  }
};

exports.deleteEvent = async (req , res) => {
 try{
 const event = await Event_type.findByPk(req.params.id);
 if (!event) return res.status(404).send("event not found")
 
 const eventData = event.toJSON();
 
 await event.destroy();
 res.status(204).send(eventData);
 } catch (error) {
 res.status(500).send(error.message);
 }
};