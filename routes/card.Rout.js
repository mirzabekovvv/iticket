const express = require('express');
const router = express.Router();
const Card = require('../controller/card.controller'); 

/**
 * @swagger
 * tags:
 *  name: Card
 *  description: Card
 */
 
/** 
 * @swagger
 * /api/card:
 *  post:
 *     tags: [Card]
 *     summary: Create a new Card
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               customer_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               finishedAt:
 *                 type: string
 *                 format: date
 *               status_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Card created 
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/card", Card.createCard); 

/**
  * @swagger
  * /api/card:
  *   get:
  *     tags: [Card]
  *     summary: Get all Card
  *     responses:
  *       200:
  *         description: List of Card
  *       500:
  *         description: Server error
  */
router.get("/card", Card.getCard);

/**
 * @swagger
 * /api/card/{id}:
 *   get:
 *     tags: [Card]
 *     summary: Get a single Card
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Card ID
 *     responses:
 *       '200':
 *         description: Card details
 *       '400':
 *         description: Card not found
 *       '500':
 *         description: Server error
 */
router.get("/card/:id", Card.getCardById); 

/**
 * @swagger
 * /api/card/{id}:
 *   put:
 *     tags: [Card]
 *     summary: Update Card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Card ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               customer_id:
 *                 type: number
 *               createdAt:
 *                 type: date
 *               fineshedAt:
 *                 type: date
 *               status_id:
 *                 type: number
 *       200:
 *         description: Card updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Card not found
 *       500:
 *         description: Server error
 */
router.put("/card/:id", Card.updataCard);

/**
 * @swagger
 * /api/card/{id}:
 *   delete:
 *     tags: [Card]
 *     summary: Delete Card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Card ID
 *     responses:
 *       204:
 *         description: Card deleted
 *       404:
 *         description: Card not found
 *       500:
 *         description: Server error
 */
router.delete("/card/:id", Card.deleteCard);

module.exports = router;