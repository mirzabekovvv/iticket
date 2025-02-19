const { Human, Gender } = require("../models")
const { validateHuman } = require("../validation/human.validation");

exports.createHuman = async (req, res) => {
    const { error } = validateHuman(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const human = await Human.create(req.body);
        res.status(201).send(human);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

exports.getHuman = async (req, res) => {
    try {
        const human = await Human.findAll();
        res.status(200).send(human)
    } catch (error) { 
     res.status(500).send(err.message)
    }
}

exports.getHumanById = async(req, res) =>{
 try{
  const human = await Human.findByPk(req.params.id,
    {
        include: [
          {
            model: Gender,
            as: "human_categoryGender",
          },
        ],
      })
  if (!human) return res.status(404).send("Human not found");
  res.status(200).send(human);
 }catch (error) {
  res.status(500).send(error.message)
 }
}

exports.updataHuman = async (req , res) => {
 const { error } = validateHuman(req.body);
 if (error) return res.status(400).send(error.details[0].message);
 try{
  const human = await Human.findByPk(req.params.id);
  if (!human) return res.status(404).send("Human not found");
  await human.update(req.body);
  res.status(200).send(human);
  } catch (error) {
  res.status(500).send(error.message);
  }
};

exports.deleteHuman = async (req , res) => {
 try{
 const human = await Human.findByPk(req.params.id);
 if (!human) return res.status(404).send("Human not found")
 
 const humanData = human.toJSON();
 
 await human.destroy();
 res.status(204).send(humanData);
 } catch (error) {
 res.status(500).send(error.message);
 }
};