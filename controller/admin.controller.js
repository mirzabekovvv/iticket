const { Admin } = require("../models")
const { validateAdmin } = require("../validation/admin.validation");

exports.createAdmin = async (req, res) => {
    const { error } = validateAdmin(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const admin = await Admin.create(req.body);
        res.status(201).send(admin);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

exports.getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findAll();
        res.status(200).send(admin)
    } catch (error) { 
     res.status(500).send(err.message)
    }
}

exports.getAdminById = async(req, res) =>{
 try{
  const admin = await Admin.findByPk(req.params.id)
  if (!admin) return res.status(404).send("admin not found");
  res.status(200).send(admin);
 }catch (error) {
  res.status(500).send(error.message)
 }
}

exports.updataAdmin = async (req , res) => {
 const { error } = validateAdmin(req.body);
 if (error) return res.status(400).send(error.details[0].message);
 try{
  const admin = await Admin.findByPk(req.params.id);
  if (!admin) return res.status(404).send("Admin not found");
  await admin.update(req.body);
  res.status(200).send(admin);
  } catch (error) {
  res.status(500).send(error.message);
  }
};

exports.deleteAdmin = async (req , res) => {
 try{
 const admin = await Admin.findByPk(req.params.id);
 if (!admin) return res.status(404).send("Admin not found")
 
 const adminData = admin.toJSON();
 
 await stuff.destroy();
 res.status(204).send(adminData);
 } catch (error) {
 res.status(500).send(error.message);
 }
};