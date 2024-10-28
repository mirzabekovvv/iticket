const { Eventt, Event_type, Human, Venuee, Language } = require("../models")
const { validateEventt } = require("../validation/event..validation");

exports.createEvent = async (req, res) => {
    const { error } = validateEventt(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const event = await Eventt.create(req.body);
        res.status(201).send(event);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

exports.getEvent = async (req, res) => {
    try {
        const event = await Eventt.findAll();
        res.status(200).send(event)
    } catch (error) { 
     res.status(500).send(err.message)
    }
}

exports.getEventById = async(req, res) =>{
 try{
  const event = await Eventt.findByPk(req.params.id,
    {
        include: [
          {
            model: Event_type,
            as: "eventevent_type",
          },
          {
            model: Human,
            as: "eventhuman_category",
          },
          {
            model: Venuee,
            as: "eventvenue",
          },
          {
            model: Language,
            as: "eventlanguage",
          },
        ],
      })
  if (!event) return res.status(404).send("event not found");
  res.status(200).send(event);
 }catch (error) {
  res.status(500).send(error.message)
 }
}

exports.updataEvent = async (req , res) => {
 const { error } = validateEventt(req.body);
 if (error) return res.status(400).send(error.details[0].message);
 try{
  const event = await Eventt.findByPk(req.params.id);
  if (!event) return res.status(404).send("event not found");
  await event.update(req.body);
  res.status(200).send(event);
  } catch (error) {
  res.status(500).send(error.message);
  }
};

exports.deleteEvent = async (req , res) => {
 try{
 const event = await Eventt.findByPk(req.params.id);
 if (!event) return res.status(404).send("event not found")
 
 const eventData = event.toJSON();
 
 await event.destroy();
 res.status(204).send(eventData);
 } catch (error) {
 res.status(500).send(error.message);
 }
};