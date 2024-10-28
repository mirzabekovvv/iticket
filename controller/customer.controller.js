const { Customer, Language } = require("../models")
const { validateCustomer } = require("../validation/customer.validation");

exports.createCustomer = async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const customer = await Customer.create(req.body);
        res.status(201).send(customer);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

exports.getCustomer = async (req, res) => {
    try {
        const customer = await Customer.findAll();
        res.status(200).send(customer)
    } catch (error) { 
     res.status(500).send(err.message)
    }
}

exports.getCustomerById = async(req, res) =>{
 try{
  const customer = await Customer.findByPk(req.params.id,
    {
        include: [
          {
            model: Language,
            as: "customerLanguage",
          },
        ],
      })
  if (!customer) return res.status(404).send("customer not found");
  res.status(200).send(customer);
 }catch (error) {
  res.status(500).send(error.message)
 }
}

exports.updataCustomer = async (req , res) => {
 const { error } = validateCustomer(req.body);
 if (error) return res.status(400).send(error.details[0].message);
 try{
  const customer = await Customer.findByPk(req.params.id);
  if (!customer) return res.status(404).send("customer not found");
  await customer.update(req.body);
  res.status(200).send(customer);
  } catch (error) {
  res.status(500).send(error.message);
  }
};

exports.deleteCustomer = async (req , res) => {
 try{
 const customer = await Customer.findByPk(req.params.id);
 if (!customer) return res.status(404).send("customer not found")
 
 const customerData = customer.toJSON();
 
 await customer.destroy();
 res.status(204).send(customerData);
 } catch (error) {
 res.status(500).send(error.message);
 }
};