const express = require("express");
const router = express.Router();
const diskrictController = require("../controller/Diskrict.controller");

/**
 * @swagger
 * tags:
 *   name: Diskrict
 *   description: Diskrict management
 */

/**
 * @swagger
 * /api/diskrict:
 *  post:
 *    tags: [Diskrict]
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
 *               region_id:
 *                 type: number
 *    responses:
 *     201:
 *       description: created diskrict
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/diskrict", diskrictController.createDiskrict );

/**
 * @swagger
 * /api/diskrict:
 *   get:
 *     tags: [Diskrict]
 *     summary: Get all diskrict
 *     responses:
 *       200:
 *         description: List of diskrict
 *       500:
 *         description: Server error
 */
router.get("/diskrict", diskrictController.getDiskrict);

/**
 * @swagger
 *  /api/diskrict/{id}:
 *   get:
 *     tags: [Diskrict]
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
 *         description: Diskrict details
 *       404:
 *         description: Diskrict not found
 *       500:
 *         description: Server error
 */
router.get("/diskrict/:id", diskrictController.getDiskrictById);

/**
 * @swagger
 * /api/diskrict/{id}:
 *   put:
 *     tags: [Diskrict]
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
 *               region_id:
 *                 type: number 
 *     responses:
 *       200:
 *         description: Diskrict updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Diskrict not found
 *       500:
 *         description: Server error
 */
router.put("/diskrict/:id", diskrictController.updateDiskrict);

/**
 * @swagger
 * /api/diskrict/{id}:
 *   delete:
 *     tags: [Diskrict]
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
 *         description: Diskrict deleted
 *       404:
 *         description: Diskrict not found
 *       500:
 *         description: Server error
 */
router.delete("/diskrict/:id", diskrictController.deleteDiskrict);

module.exports = router;
