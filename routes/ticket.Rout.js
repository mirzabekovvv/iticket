const express = require('express');
const router = express.Router();
const Ticket = require('../controller/ticket.controller'); 

/**
 * @swagger
 * tags:
 *  name: Ticket
 *  description: Ticket
 */
 
/** 
 * @swagger
 * /api/ticket:
 *  post:
 *     tags: [Ticket]
 *     summary: Create a new seat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: number
 *               service_fee:
 *                 type: string
 *               status_id:
 *                 type: number
 *               ticket_type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ticket created 
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/ticket", Ticket.createTicket); 

/**
  * @swagger
  * /api/ticket:
  *   get:
  *     tags: [Ticket]
  *     summary: Get all seat
  *     responses:
  *       200:
  *         description: List of Ticket
  *       500:
  *         description: Server error
  */
router.get("/ticket", Ticket.getTicket);

/**
 * @swagger
 * /api/ticket/{id}:
 *   get:
 *     tags: [Ticket]
 *     summary: Get a single Seat
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       '200':
 *         description: Ticket details
 *       '400':
 *         description: Ticket not found
 *       '500':
 *         description: Server error
 */
router.get("/ticket/:id", Ticket.getTicketById); 

/**
 * @swagger
 * /api/ticket/{id}:
 *   put:
 *     tags: [Ticket]
 *     summary: Update Seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: string
 *               service_fee:
 *                 type: string
 *               status_id:
 *                 type: number
 *               ticket_type:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ticket updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.put("/ticket/:id", Ticket.updataTicket);

/**
 * @swagger
 * /api/ticket/{id}:
 *   delete:
 *     tags: [Ticket]
 *     summary: Delete Seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       204:
 *         description: Ticket deleted
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.delete("/ticket/:id", Ticket.deleteTicket);

module.exports = router;