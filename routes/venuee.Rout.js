const express = require("express");
const router = express.Router();
const venueeController = require("../controller/venuee.controller");

/**
 * @swagger
 * tags:
 *   name: Venuee
 *   description: Venuee management
 */

/**
 * @swagger
 * /api/venuee:
 *  post:
 *    tags: [Venuee]
 *    summary: Create a new venuee
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               venue_type_id:
 *                 type: number
 *               schema:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *    responses:
 *     201:
 *       description:  created venuee
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/venuee", venueeController.createvenuee );

/**
 * @swagger
 * /api/venuee:
 *   get:
 *     tags: [Venuee]
 *     summary: Get all venuee
 *     responses:
 *       200:
 *         description: List of venuee
 *       500:
 *         description: Server error
 */
router.get("/venuee", venueeController.getvenuee);

/**
 * @swagger
 *  /api/venuee/{id}:
 *   get:
 *     tags: [Venuee]
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
 *         description: venuee details
 *       404:
 *         description: venuee not found
 *       500:
 *         description: Server error
 */
router.get("/venuee/:id", venueeController.getvenueeById);

/**
 * @swagger
 * /api/venuee/{id}:
 *   put:
 *     tags: [Venuee]
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
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               venue_type_id:
 *                 type: number
 *               schema:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: venuee updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: venuee not found
 *       500:
 *         description: Server error
 */
router.put("/venuee/:id", venueeController.updatevenuee);

/**
 * @swagger
 * /api/venuee/{id}:
 *   delete:
 *     tags: [Venuee]
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
 *         description: Venuee deleted
 *       404:
 *         description: Venuee not found
 *       500:
 *         description: Server error
 */
router.delete("/venuee/:id", venueeController.deleteVenuee);

module.exports = router;
