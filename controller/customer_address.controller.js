const { Customer_address, Customer, Country, Region, Diskrict } = require("../models")
const { validateCustomer_address } = require("../validation/customer_address.validation");

exports.createCustomer_address = async (req, res) => {
    const { error } = validateCustomer_address(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const customer_address = await Customer_address.create(req.body);
        res.status(201).send(customer_address);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

exports.getCustomer_address = async (req, res) => {
    try {
        const customer_address = await Customer_address.findAll();
        res.status(200).send(customer_address)
    } catch (error) { 
     res.status(500).send(err.message)
    }
}

exports.getCustomer_addressById = async(req, res) =>{
 try{
  const customer_address = await Customer_address.findByPk(req.params.id,
    {
        include: [
          {
            model: Customer,
            as: "customer_addresscustomer",
          },
          {
            model: Country,
            as: "customer_addresscountry",
          },
          {
            model: Region,
            as: "customer_addressregion",
          },
          {
            model: Diskrict,
            as: "customer_addressdistrict",
          },
        ],
      })
  if (!customer_address) return res.status(404).send("Customer_address not found");
  res.status(200).send(customer_address);
 }catch (error) {
  res.status(500).send(error.message)
 }
}

exports.updataCustomer_address = async (req , res) => {
 const { error } = validateCustomer_address(req.body);
 if (error) return res.status(400).send(error.details[0].message);
 try{
  const customer_address = await Customer_address.findByPk(req.params.id);
  if (!customer_address) return res.status(404).send("Customer_address not found");
  await customer_address.update(req.body);
  res.status(200).send(customer_address);
  } catch (error) {
  res.status(500).send(error.message);
  }
};

exports.deleteCustomer_address = async (req , res) => {
 try{
 const customer_address = await Customer_address.findByPk(req.params.id);
 if (!customer_address) return res.status(404).send("Customer_address not found")
 
 const customer_addressData = customer_card.toJSON();
 
 await customer_address.destroy();
 res.status(204).send(customer_addressData);
 } catch (error) {
 res.status(500).send(error.message);
 }
};