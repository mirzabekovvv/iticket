const express = require("express");
const router = express.Router();
const regionController = require("../controller/region.controller");

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Region management
 */

/**
 * @swagger
 * /api/region:
 *  post:
 *    tags: [Region]
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
 *               postpone:
 *                 type: number
 *    responses:
 *     201:
 *       description: created Region
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/region", regionController.createRegion );

/**
 * @swagger
 * /api/region:
 *   get:
 *     tags: [Region]
 *     summary: Get all region
 *     responses:
 *       200:
 *         description: List of region
 *       500:
 *         description: Server error
 */
router.get("/region", regionController.getRegion);

/**
 * @swagger
 *  /api/region/{id}:
 *   get:
 *     tags: [Region]
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
 *         description: Region details
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.get("/region/:id", regionController.getRegionById);

/**
 * @swagger
 * /api/region/{id}:
 *   put:
 *     tags: [Region]
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
 *               postpone:
 *                 type: number 
 *     responses:
 *       200:
 *         description: Region updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.put("/region/:id", regionController.updateRegion);

/**
 * @swagger
 * /api/region/{id}:
 *   delete:
 *     tags: [Region]
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
 *         description: Region deleted
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.delete("/region/:id", regionController.deleteRegion);

module.exports = router;
