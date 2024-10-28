const express = require('express');
const router = express.Router();
const Admin = require('../controller/admin.controller'); 

/**
 * @swagger
 * tags:
 *  name: Admin
 *  description: Admin
 */
 
/** 
 * @swagger
 * /api/admin:
 *  post:
 *     tags: [Admin]
 *     summary: Create a new admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: string
 *               is_creator:
 *                 type: string
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin created 
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/admin", Admin.createAdmin); 

/**
  * @swagger
  * /api/admin:
  *   get:
  *     tags: [Admin]
  *     summary: Get all admin
  *     responses:
  *       200:
  *         description: List of admin
  *       500:
  *         description: Server error
  */
router.get("/admin", Admin.getAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *   get:
 *     tags: [Admin]
 *     summary: Get a single admin
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       '200':
 *         description: Admin details
 *       '400':
 *         description: Admin not found
 *       '500':
 *         description: Server error
 */
router.get("/admin/:id", Admin.getAdminById); 

/**
 * @swagger
 * /api/admin/{id}:
 *   put:
 *     tags: [Admin]
 *     summary: Update admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: admin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: string
 *               is_creator:
 *                 type: string
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.put("/admin/:id", Admin.updataAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *   delete:
 *     tags: [Admin]
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
 *         description: Admin deleted
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.delete("/admin/:id", Admin.deleteAdmin);

module.exports = router;