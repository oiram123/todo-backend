const express = require("express")
const {register} = require("../controllers/auth")

const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *
 *     User:
 *       type: object
 *
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: user phone number
 *         password:
 *           type: string
 *           description: user full name
 *
 *       example:
 *         email: johndoe@email.com
 *         password: 1234567
 *
 *
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authinticate module like register and login users
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: register new user with his phone number
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *
 *     responses:
 *       200:
 *         description: register new user
 *       404:
 *         description: user is already regestered
 *       500:
 *         description: Some server error
 */
router.post("/register", register);


module.exports = router;

