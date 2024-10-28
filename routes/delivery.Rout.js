const express = require("express");
const router = express.Router();
const deliveryController = require("../controller/delivery.controller");

/**
 * @swagger
 * tags:
 *   name: Delivery
 *   description: Delivery management
 */

/**
 * @swagger
 * /api/delivery:
 *  post:
 *    tags: [Delivery]
 *    summary: Create a new delivery
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
 *       description:  created delivery
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/delivery", deliveryController.createDelivery );

/**
 * @swagger
 * /api/delivery:
 *   get:
 *     tags: [Delivery]
 *     summary: Get all delivery
 *     responses:
 *       200:
 *         description: List of delivery
 *       500:
 *         description: Server error
 */
router.get("/delivery", deliveryController.getDelivery);

/**
 * @swagger
 *  /api/delivery/{id}:
 *   get:
 *     tags: [Delivery]
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
 *         description: delivery details
 *       404:
 *         description: delivery not found
 *       500:
 *         description: Server error
 */
router.get("/delivery/:id", deliveryController.getDeliveryById);

/**
 * @swagger
 * /api/delivery/{id}:
 *   put:
 *     tags: [Delivery]
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
 *         description: delivery updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: delivery not found
 *       500:
 *         description: Server error
 */
router.put("/delivery/:id", deliveryController.updateDelivery);

/**
 * @swagger
 * /api/delivery/{id}:
 *   delete:
 *     tags: [Delivery]
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
 *         description: Delivery deleted
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
router.delete("/delivery/:id", deliveryController.deleteDelivery);

module.exports = router;
