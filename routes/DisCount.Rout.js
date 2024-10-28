const express = require("express");
const router = express.Router();
const discountController = require("../controller/DisCount.controller");

/**
 * @swagger
 * tags:
 *   name: DisCount
 *   description: DisCount management
 */

/**
 * @swagger
 * /api/discount:
 *  post:
 *    tags: [DisCount]
 *    summary: Create a new discount
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *               discount:
 *                 type: string
 *               finish_date:
 *                 type: string
 *    responses:
 *     201:
 *       description:  created discount
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/discount", discountController.createDisCount );

/**
 * @swagger
 * /api/discount:
 *   get:
 *     tags: [DisCount]
 *     summary: Get all discount
 *     responses:
 *       200:
 *         description: List of discount
 *       500:
 *         description: Server error
 */
router.get("/discount", discountController.getDisCount);

/**
 * @swagger
 *  /api/discount/{id}:
 *   get:
 *     tags: [DisCount]
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
 *         description: discount details
 *       404:
 *         description: discount not found
 *       500:
 *         description: Server error
 */
router.get("/discount/:id", discountController.getDisCountById);

/**
 * @swagger
 * /api/discount/{id}:
 *   put:
 *     tags: [DisCount]
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
 *               discount:
 *                 type: string 
 *               finish_date:
 *                 type: string 
 *     responses:
 *       200:
 *         description: discount updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: discount not found
 *       500:
 *         description: Server error
 */
router.put("/discount/:id", discountController.updateDisCount);

/**
 * @swagger
 * /api/discount/{id}:
 *   delete:
 *     tags: [DisCount]
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
 *         description: DisCount deleted
 *       404:
 *         description: DisCount not found
 *       500:
 *         description: Server error
 */
router.delete("/discount/:id", discountController.deleteDisCount);

module.exports = router;
