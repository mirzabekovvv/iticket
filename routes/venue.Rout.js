const express = require("express");
const router = express.Router();
const venueController = require("../controller/venue_type.controller");

/**
 * @swagger
 * tags:
 *   name: Venue
 *   description: Venue management
 */

/**
 * @swagger
 * /api/venue:
 *  post:
 *    tags: [Venue]
 *    summary: Create a new venue
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
 *       description:  created venue
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/venue", venueController.createvenue );

/**
 * @swagger
 * /api/venue:
 *   get:
 *     tags: [Venue]
 *     summary: Get all venue
 *     responses:
 *       200:
 *         description: List of venue
 *       500:
 *         description: Server error
 */
router.get("/venue", venueController.getvenue);

/**
 * @swagger
 *  /api/venue/{id}:
 *   get:
 *     tags: [Venue]
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
 *         description: venue details
 *       404:
 *         description: venue not found
 *       500:
 *         description: Server error
 */
router.get("/venue/:id", venueController.getvenueById);

/**
 * @swagger
 * /api/venue/{id}:
 *   put:
 *     tags: [Venue]
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
 *         description: venue updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: venue not found
 *       500:
 *         description: Server error
 */
router.put("/venue/:id", venueController.updatevenue);

/**
 * @swagger
 * /api/venue/{id}:
 *   delete:
 *     tags: [Venue]
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
 *         description: Venue deleted
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.delete("/venue/:id", venueController.deleteVenue);

module.exports = router;
