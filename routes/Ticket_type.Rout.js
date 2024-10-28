const express = require("express");
const router = express.Router();
const ticket_typeController = require("../controller/Ticket_type.controller");

/**
 * @swagger
 * tags:
 *   name: Ticket_type
 *   description: Ticket_type management
 */

/**
 * @swagger
 * /api/ticket_type:
 *  post:
 *    tags: [Ticket_type]
 *    summary: Create a new ticket_type
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *               color:
 *                 type: string
 *               name:
 *                 type: string
 *               ticket_id:
 *                 type: number
 *    responses:
 *     201:
 *       description:  created ticket_type
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/ticket_type", ticket_typeController.createTicket_type );

/**
 * @swagger
 * /api/ticket_type:
 *   get:
 *     tags: [Ticket_type]
 *     summary: Get all ticket_type
 *     responses:
 *       200:
 *         description: List of ticket_type
 *       500:
 *         description: Server error
 */
router.get("/ticket_type", ticket_typeController.getTicket_type);

/**
 * @swagger
 *  /api/ticket_type/{id}:
 *   get:
 *     tags: [Ticket_type]
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
 *         description: ticket_type details
 *       404:
 *         description: ticket_type not found
 *       500:
 *         description: Server error
 */
router.get("/ticket_type/:id", ticket_typeController.getTicket_typeById);

/**
 * @swagger
 * /api/ticket_type/{id}:
 *   put:
 *     tags: [Ticket_type]
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
 *               color:
 *                 type: string 
 *               name:
 *                 type: string 
 *               ticket_id:
 *                 type: number 
 *     responses:
 *       200:
 *         description: ticket_type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: ticket_type not found
 *       500:
 *         description: Server error
 */
router.put("/ticket_type/:id", ticket_typeController.updateTicket_type);

/**
 * @swagger
 * /api/ticket_type/{id}:
 *   delete:
 *     tags: [Ticket_type]
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
 *         description: Ticket_type deleted
 *       404:
 *         description: Ticket_type not found
 *       500:
 *         description: Server error
 */
router.delete("/ticket_type/:id", ticket_typeController.deleteTicket_type);

module.exports = router;
