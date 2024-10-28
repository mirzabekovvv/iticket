const express = require("express");
const router = express.Router();
const customerController = require("../controller/customer.controller");

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer management
 */

/**
 * @swagger
 * /api/customer:
 *  post:
 *    tags: [Customer]
 *    summary: Create a new venue
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *               first_name:
 *                 type: string 
 *               last_name:
 *                 type: string 
 *               phone:
 *                 type: number 
 *               hashed_password:
 *                 type: string 
 *               email:
 *                 type: string 
 *               birth_date:
 *                 type: date 
 *               gender:
 *                 type: string 
 *               lang_id:
 *                 type: number 
 *               hashed_refresh_token:
 *                 type: string 
 *    responses:
 *     201:
 *       description:  created Customer
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/customer", customerController.createCustomer );

/**
 * @swagger
 * /api/customer:
 *   get:
 *     tags: [Customer]
 *     summary: Get all customer
 *     responses:
 *       200:
 *         description: List of customer
 *       500:
 *         description: Server error
 */
router.get("/customer", customerController.getCustomer);

/**
 * @swagger
 *  /api/customer/{id}:
 *   get:
 *     tags: [Customer]
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
 *         description: Customer details
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.get("/customer/:id", customerController.getCustomerById);

/**
 * @swagger
 * /api/customer/{id}:
 *   put:
 *     tags: [Customer]
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
 *               first_name:
 *                 type: string 
 *               last_name:
 *                 type: string 
 *               phone:
 *                 type: string 
 *               hashed_password:
 *                 type: string 
 *               email:
 *                 type: string 
 *               birth_date:
 *                 type: date 
 *               gender:
 *                 type: string 
 *               lang_id:
 *                 type: number 
 *               hashed_refresh_token:
 *                 type: string 
 *     responses:
 *       200:
 *         description: Customer updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.put("/customer/:id", customerController.updataCustomer);

/**
 * @swagger
 * /api/customer/{id}:
 *   delete:
 *     tags: [Customer]
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
 *         description: Customer deleted
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.delete("/customer/:id", customerController.deleteCustomer);

module.exports = router;
