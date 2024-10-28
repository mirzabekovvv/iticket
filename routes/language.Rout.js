const express = require("express");
const router = express.Router();
const languageController = require("../controller/language.controller");

/**
 * @swagger
 * tags:
 *   name: Language
 *   description: Language management
 */

/**
 * @swagger
 * /api/language:
 *  post:
 *    tags: [Language]
 *    summary: Create a new language
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *               language:
 *                 type: string
 *               description:
 *                 type: string
 *    responses:
 *     201:
 *       description:  created language
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/language", languageController.createLanguage );

/**
 * @swagger
 * /api/language:
 *   get:
 *     tags: [Language]
 *     summary: Get all language
 *     responses:
 *       200:
 *         description: List of language
 *       500:
 *         description: Server error
 */
router.get("/language", languageController.getLanguage);

/**
 * @swagger
 *  /api/language/{id}:
 *   get:
 *     tags: [Language]
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
 *         description: language details
 *       404:
 *         description: language not found
 *       500:
 *         description: Server error
 */
router.get("/language/:id", languageController.getLanguageById);

/**
 * @swagger
 * /api/language/{id}:
 *   put:
 *     tags: [Language]
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
 *               language:
 *                 type: string 
 *               description:
 *                 type: string 
 *     responses:
 *       200:
 *         description: language updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: language not found
 *       500:
 *         description: Server error
 */
router.put("/language/:id", languageController.updateLanguage);

/**
 * @swagger
 * /api/language/{id}:
 *   delete:
 *     tags: [Language]
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
 *         description: Language deleted
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error
 */
router.delete("/language/:id", languageController.deleteLanguage);

module.exports = router;
