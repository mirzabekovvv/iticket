const express = require("express");
const router = express.Router();
const EventtController = require("../controller/eventt.controller");

/**
 * @swagger
 * tags:
 *   name: Eventt
 *   description: Eventt management
 */

/**
 * @swagger
 * /api/eventt:
 *  post:
 *    tags: [Eventt]
 *    summary: Create a new Eventt
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *               name:
 *                 type: string 
 *               photo:
 *                 type: string 
 *               start_date:
 *                 type: date 
 *               start_time:
 *                 type: string 
 *               finish_date:
 *                 type: date
 *               finish_time:
 *                 type: string 
 *               info:
 *                 type: string 
 *               event_type_id:
 *                 type: number 
 *               human_category_id:
 *                 type: number 
 *               venue_id:
 *                 type: number 
 *               lang_id:
 *                 type: number 
 *               release_date:
 *                 type: date 
 *    responses:
 *     201:
 *       description: created Eventt
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/eventt", EventtController.createEvent );

/**
 * @swagger
 * /api/eventt:
 *   get:
 *     tags: [Eventt]
 *     summary: Get all Eventt
 *     responses:
 *       200:
 *         description: List of Eventt
 *       500:
 *         description: Server error
 */
router.get("/eventt", EventtController.getEvent);

/**
 * @swagger
 *  /api/eventt/{id}:
 *   get:
 *     tags: [Eventt]
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
 *         description: Eventt details
 *       404:
 *         description: Eventt not found
 *       500:
 *         description: Server error
 */
router.get("/eventt/:id", EventtController.getEventById);

/**
 * @swagger
 * /api/eventt/{id}:
 *   put:
 *     tags: [Eventt]
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
 *               photo:
 *                 type: string 
 *               start_date:
 *                 type: date 
 *               start_time:
 *                 type: string 
 *               finish_date:
 *                 type: date
 *               finish_time:
 *                 type: string 
 *               info:
 *                 type: string 
 *               event_type_id:
 *                 type: number 
 *               human_category_id:
 *                 type: number 
 *               venue_id:
 *                 type: number 
 *               lang_id:
 *                 type: number 
 *               release_date:
 *                 type: date 
 *     responses:
 *       200:
 *         description: Eventt updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Eventt not found
 *       500:
 *         description: Server error
 */
router.put("/eventt/:id", EventtController.updataEvent);

/**
 * @swagger
 * /api/eventt/{id}:
 *   delete:
 *     tags: [Eventt]
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
 *         description: Eventt deleted
 *       404:
 *         description: Eventt not found
 *       500:
 *         description: Server error
 */
router.delete("/eventt/:id", EventtController.deleteEvent);

module.exports = router;
