const express = require("express");
const {
  createTodo,
  getAllTodo,
  getOneTodo,
  deleteTodo,
  updateTodo,
  updateStatusTodo,
} = require("../controllers/todo");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *
 *     Todo:
 *       type: object
 *
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         title:
 *           type: string
 *           description: user phone number
 *         content:
 *           type: string
 *           description: user full name
 *         status:
 *           type: string
 *           description: user full name
 *         user:
 *           type: string
 *           description: user full name
 *
 *       example:
 *         title: Go to work
 *         content: I have to be in work on 8 am.
 *         status: Todo
 *
 *
 */

/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: Authinticate module like register and login users
 */

/**
 * @swagger
 * /todo/createTodo:
 *   post:
 *     summary: register new user with his phone number
 *     tags: [Todo]
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Todo'
 *
 *     responses:
 *       200:
 *         description: register new user
 *       404:
 *         description: user is already regestered
 *       500:
 *         description: Some server error
 */
router.post("/createTodo", createTodo);

/**
 * @swagger
 * /todo/getAllTodo/{userId}:
 *   get:
 *     summary: Getting user profile information
 *     tags: [Todo]
 *     parameters:
 *       - name: userId
 *         description: User Profile Information
 *         type: string
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: The user profile has been recivied
 *       500:
 *         description: Some server error
 */

router.get("/getAllTodo/:userId", getAllTodo);

/**
 * @swagger
 * /todo/getOneTodo/{todoID}:
 *   get:
 *     summary: Getting user profile information
 *     tags: [Todo]
 *     parameters:
 *       - name: todoID
 *         description: User Profile Information
 *         type: string
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: The user profile has been recivied
 *       500:
 *         description: Some server error
 */

router.get("/getOneTodo/:todoID", getOneTodo);

/**
 * @swagger
 * /todo/updateTodo:
 *   patch:
 *     summary: register new user with his phone number
 *     tags: [Todo]
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Todo'
 *
 *     responses:
 *       200:
 *         description: register new user
 *       404:
 *         description: user is already regestered
 *       500:
 *         description: Some server error
 */

router.patch("/updateTodo", updateTodo);

/**
 * @swagger
 * /todo/deleteTodo/{todoID}:
 *   delete:
 *     summary: Getting user profile information
 *     tags: [Todo]
 *     parameters:
 *       - name: todoID
 *         description: User Profile Information
 *         type: string
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: The user profile has been recivied
 *       500:
 *         description: Some server error
 */

router.delete("/deleteTodo/:todoID", deleteTodo);

/**
 * @swagger
 * /todo/updateStatusTodo/{taskId}:
 *   patch:
 *     summary: register new user with his phone number
 *     tags: [Todo]
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Todo'
 *
 *     responses:
 *       200:
 *         description: register new user
 *       404:
 *         description: user is already regestered
 *       500:
 *         description: Some server error
 */
router.patch("/updateStatusTodo/:taskId", updateStatusTodo);

module.exports = router;
