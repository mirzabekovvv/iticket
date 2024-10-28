const express = require("express");
const router = express.Router();
const HumanController = require("../controller/human.controller");

/**
 * @swagger
 * tags:
 *   name: Human
 *   description: Human management
 */

/**
 * @swagger
 * /api/human:
 *  post:
 *    tags: [Human]
 *    summary: Create a new Event
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: string
 *               finish_age:
 *                 type: string
 *               gender_id:
 *                 type: number
 *    responses:
 *     201:
 *       description:  created Event
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/human", HumanController.createHuman );

/**
 * @swagger
 * /api/human:
 *   get:
 *     tags: [Human]
 *     summary: Get all Human
 *     responses:
 *       200:
 *         description: List of Human
 *       500:
 *         description: Server error
 */
router.get("/human", HumanController.getHuman);

/**
 * @swagger
 *  /api/human/{id}:
 *   get:
 *     tags: [Human]
 *     summary: Get Human by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human ID
 *     responses:
 *       200:
 *         description: Human details
 *       404:
 *         description: Human not found
 *       500:
 *         description: Server error
 */
router.get("/human/:id", HumanController.getHumanById);

/**
 * @swagger
 * /api/human/{id}:
 *   put:
 *     tags: [Human]
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
 *               start_age:
 *                 type: string
 *               finish_age:
 *                 type: string
 *               gender:
 *                 type: string
 *     responses:
 *       200:
 *         description: Human updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Human not found
 *       500:
 *         description: Server error
 */
router.put("/human/:id", HumanController.updataHuman);

/**
 * @swagger
 * /api/human/{id}:
 *   delete:
 *     tags: [Human]
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
 *         description: Human deleted
 *       404:
 *         description: Human not found
 *       500:
 *         description: Server error
 */
router.delete("/human/:id", HumanController.deleteHuman);

module.exports = router;
