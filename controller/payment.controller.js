const { validatePayment } = require("../validation/payment.validation");
const { Payment } = require("../models")
exports.createpayment = async (req, res) => {
  const { error } = validatePayment(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const payment = await Payment.create(req.body);
    res.status(201).send(payment);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getpayment = async (req, res) => {
  try {
    const payment = await Payment.findAll();
    res.status(200).send(payment);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getpaymentById = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) return res.status(404).send("payment not found");
    res.status(200).send(payment);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updatepayment = async (req, res) => {
  const { error } = validatePayment(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) return res.status(404).send("payment not found");

    await payment.update(req.body);
    res.status(200).send(payment);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) return res.status(404).send("payment not found");

    const PaymentData = payment.toJSON();

    await payment.destroy();
    res.status(204).send(PaymentData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};