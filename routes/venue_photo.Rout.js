const express = require("express");
const router = express.Router();
const venue_photoController = require("../controller/venue_photo");

/**
 * @swagger
 * tags:
 *   name: Venue_photo
 *   description: Venue_photo management
 */

/**
 * @swagger
 * /api/venue_photo:
 *  post:
 *    tags: [Venue_photo]
 *    summary: Create a new venue
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *               venue_id:
 *                 type: number
 *               url:
 *                 type: string
 *    responses:
 *     201:
 *       description: created venue_photo
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/venue_photo", venue_photoController.createvenue_photo );

/**
 * @swagger
 * /api/venue_photo:
 *   get:
 *     tags: [Venue_photo]
 *     summary: Get all venue_photo
 *     responses:
 *       200:
 *         description: List of venue_photo
 *       500:
 *         description: Server error
 */
router.get("/venue_photo", venue_photoController.getvenue_photo);

/**
 * @swagger
 *  /api/venue_photo/{id}:
 *   get:
 *     tags: [Venue_photo]
 *     summary: Get Venue_photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_photo ID
 *     responses:
 *       200:
 *         description: venue_photo details
 *       404:
 *         description: venue_photo not found
 *       500:
 *         description: Server error
 */
router.get("/venue_photo/:id", venue_photoController.getvenue_photoById);

/**
 * @swagger
 * /api/venue_photo/{id}:
 *   put:
 *     tags: [Venue_photo]
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
 *               venue_id:
 *                 type: number 
 *               url:
 *                 type: string 
 *     responses:
 *       200:
 *         description: venue_photo updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: venue_photo not found
 *       500:
 *         description: Server error
 */
router.put("/venue_photo/:id", venue_photoController.updatevenue_photo);

/**
 * @swagger
 * /api/venue_photo/{id}:
 *   delete:
 *     tags: [Venue_photo]
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
 *         description: Venue_photo deleted
 *       404:
 *         description: Venue_photo not found
 *       500:
 *         description: Server error
 */
router.delete("/venue_photo/:id", venue_photoController.deleteVenue_photo);

module.exports = router;
