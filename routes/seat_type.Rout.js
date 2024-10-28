const express = require('express');
const router = express.Router();
const Seat_type = require('../controller/seat_type.controller'); 

/**
 * @swagger
 * tags:
 *  name: Seat
 *  description: Seat
 */
 
/** 
 * @swagger
 * /api/seat:
 *  post:
 *     tags: [Seat]
 *     summary: Create a new seat
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
 *       201:
 *         description: Seat created 
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/seat", Seat_type.createSeat); 

/**
  * @swagger
  * /api/seat:
  *   get:
  *     tags: [Seat]
  *     summary: Get all seat
  *     responses:
  *       200:
  *         description: List of seat
  *       500:
  *         description: Server error
  */
router.get("/seat", Seat_type.getSeat);

/**
 * @swagger
 * /api/seat/{id}:
 *   get:
 *     tags: [Seat]
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
 *         description: Seat details
 *       '400':
 *         description: Seat not found
 *       '500':
 *         description: Server error
 */
router.get("/seat/:id", Seat_type.getSeatById); 

/**
 * @swagger
 * /api/seat/{id}:
 *   put:
 *     tags: [Seat]
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
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seat updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
router.put("/seat/:id", Seat_type.updataSeat);

/**
 * @swagger
 * /api/seat/{id}:
 *   delete:
 *     tags: [Seat]
 *     summary: Delete Seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       204:
 *         description: Seat deleted
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
router.delete("/seat/:id", Seat_type.deleteSeat);

module.exports = router;