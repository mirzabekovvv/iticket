const express = require("express");
const router = express.Router();
const paymentController = require("../controller/payment.controller");

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Payment management
 */

/**
 * @swagger
 * /api/payment:
 *  post:
 *    tags: [Payment]
 *    summary: Create a new payment
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *               name:
 *                 type: string
 *    responses:
 *     201:
 *       description:  created payment
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/payment", paymentController.createpayment );

/**
 * @swagger
 * /api/payment:
 *   get:
 *     tags: [Payment]
 *     summary: Get all payment
 *     responses:
 *       200:
 *         description: List of payment
 *       500:
 *         description: Server error
 */
router.get("/payment", paymentController.getpayment);

/**
 * @swagger
 *  /api/payment/{id}:
 *   get:
 *     tags: [Payment]
 *     summary: Get admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: payment details
 *       404:
 *         description: payment not found
 *       500:
 *         description: Server error
 */
router.get("/payment/:id", paymentController.getpaymentById);

/**
 * @swagger
 * /api/payment/{id}:
 *   put:
 *     tags: [Payment]
 *     summary: Update admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string 
 *     responses:
 *       200:
 *         description: payment updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: payment not found
 *       500:
 *         description: Server error
 */
router.put("/payment/:id", paymentController.updatepayment);

/**
 * @swagger
 * /api/payment/{id}:
 *   delete:
 *     tags: [Payment]
 *     summary: Delete admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       204:
 *         description: Payment deleted
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
router.delete("/payment/:id", paymentController.deletePayment);

module.exports = router;
