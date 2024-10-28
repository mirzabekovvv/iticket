const express = require("express");
const router = express.Router();
const customer_addressController = require("../controller/customer_address.controller");

/**
 * @swagger
 * tags:
 *   name: Customer_address
 *   description: Customer_address management
 */

/**
 * @swagger
 * /api/customer_address:
 *  post:
 *    tags: [Customer_address]
 *    summary: Create a new venue
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *               customer_id:
 *                 type: number 
 *               name:
 *                 type: string 
 *               country_id:
 *                 type: number 
 *               region_id:
 *                 type: number 
 *               district_id:
 *                 type: number 
 *               street:
 *                 type: string
 *               house:
 *                 type: string 
 *               flat:
 *                 type: string 
 *               location:
 *                 type: string 
 *               post_index:
 *                 type: string 
 *               info:
 *                 type: string 
 *    responses:
 *     201:
 *       description:  created Customer_address
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/customer_address", customer_addressController.createCustomer_address );

/**
 * @swagger
 * /api/customer_address:
 *   get:
 *     tags: [Customer_address]
 *     summary: Get all Customer_address
 *     responses:
 *       200:
 *         description: List of Customer_address
 *       500:
 *         description: Server error
 */
router.get("/customer_address", customer_addressController.getCustomer_address);

/**
 * @swagger
 *  /api/customer_address/{id}:
 *   get:
 *     tags: [Customer_address]
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
 *         description: Customer_address details
 *       404:
 *         description: Customer_address not found
 *       500:
 *         description: Server error
 */
router.get("/customer_address/:id", customer_addressController.getCustomer_addressById);

/**
 * @swagger
 * /api/customer_address/{id}:
 *   put:
 *     tags: [Customer_address]
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
*               customer_id:
 *                 type: number 
 *               name:
 *                 type: string 
 *               country_id:
 *                 type: number 
 *               region_id:
 *                 type: number 
 *               district_id:
 *                 type: number 
 *               street:
 *                 type: string
 *               house:
 *                 type: string 
 *               flat:
 *                 type: string 
 *               location:
 *                 type: string 
 *               post_index:
 *                 type: string 
 *               info:
 *                 type: string 
 *     responses:
 *       200:
 *         description: Customer_address updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer_address not found
 *       500:
 *         description: Server error
 */
router.put("/customer_address/:id", customer_addressController.updataCustomer_address);

/**
 * @swagger
 * /api/customer_address/{id}:
 *   delete:
 *     tags: [Customer_address]
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
 *         description: Customer_address deleted
 *       404:
 *         description: Customer_address not found
 *       500:
 *         description: Server error
 */
router.delete("/customer_address/:id", customer_addressController.deleteCustomer_address);

module.exports = router;
