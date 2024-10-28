const express = require("express");
const router = express.Router();
const flatController = require("../controller/Flat.controller");

/**
 * @swagger
 * tags:
 *   name: Flat
 *   description: Flat management
 */

/**
 * @swagger
 * /api/flat:
 *  post:
 *    tags: [Flat]
 *    summary: Create a new flat
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *               etaj:
 *                 type: number
 *               condition:
 *                 type: string
 *    responses:
 *     201:
 *       description:  created flat
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/flat", flatController.createFlat );

/**
 * @swagger
 * /api/flat:
 *   get:
 *     tags: [Flat]
 *     summary: Get all flat
 *     responses:
 *       200:
 *         description: List of flat
 *       500:
 *         description: Server error
 */
router.get("/flat", flatController.getFlat);

/**
 * @swagger
 *  /api/flat/{id}:
 *   get:
 *     tags: [Flat]
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
 *         description: flat details
 *       404:
 *         description: flat not found
 *       500:
 *         description: Server error
 */
router.get("/flat/:id", flatController.getFlatById);

/**
 * @swagger
 * /api/flat/{id}:
 *   put:
 *     tags: [Flat]
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
 *               etaj:
 *                 type: number 
 *               condition:
 *                 type: string 
 *     responses:
 *       200:
 *         description: flat updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: flat not found
 *       500:
 *         description: Server error
 */
router.put("/flat/:id", flatController.updateFlat);

/**
 * @swagger
 * /api/flat/{id}:
 *   delete:
 *     tags: [Flat]
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
 *         description: Flat deleted
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
router.delete("/flat/:id", flatController.deleteFlat);

module.exports = router;
