const express = require('express');
const router = express.Router();
const Seat = require('../controller/seat.controller'); 

/**
 * @swagger
 * tags:
 *  name: Seatt
 *  description: Seatt
 */
 
/** 
 * @swagger
 * /api/seatt:
 *  post:
 *     tags: [Seatt]
 *     summary: Create a new seat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: string
 *               row_number:
 *                 type: string
 *               number:
 *                 type: string
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       201:
 *         description: Seatt created 
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/seatt", Seat.createSeatt); 

/**
  * @swagger
  * /api/seatt:
  *   get:
  *     tags: [Seatt]
  *     summary: Get all seat
  *     responses:
  *       200:
  *         description: List of seatt
  *       500:
  *         description: Server error
  */
router.get("/seatt", Seat.getSeatt);

/**
 * @swagger
 * /api/seatt/{id}:
 *   get:
 *     tags: [Seatt]
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
 *         description: Seatt details
 *       '400':
 *         description: Seatt not found
 *       '500':
 *         description: Server error
 */
router.get("/seatt/:id", Seat.getSeattById); 

/**
 * @swagger
 * /api/seatt/{id}:
 *   put:
 *     tags: [Seatt]
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
 *               sector:
 *                 type: string
 *               row_number:
 *                 type: string
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
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
router.put("/seatt/:id", Seat.updataSeatt);

/**
 * @swagger
 * /api/seatt/{id}:
 *   delete:
 *     tags: [Seatt]
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
router.delete("/seatt/:id", Seat.deleteSeatt);

module.exports = router;