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
 *           description: task title
 *         content:
 *           type: string
 *           description: task content
 *         status:
 *           type: string
 *           description: task status
 *         user:
 *           type: string
 *           description: the user that has the task
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
 *   description: Tasks api's for the ToDo application
 */

/**
 * @swagger
 * /todo/createTodo:
 *   post:
 *     summary: create a new task
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
 *         description: new task created
 *       404:
 *         description: the task is not created
 *       500:
 *         description: Some server error
 */
router.post("/createTodo", createTodo);

/**
 * @swagger
 * /todo/getAllTodo/{userId}:
 *   get:
 *     summary: Getting all tasks
 *     tags: [Todo]
 *     parameters:
 *       - name: userId
 *         description: User Id
 *         type: string
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: The Todos has been recieved
 *       500:
 *         description: Some server error
 */

router.get("/getAllTodo/:userId", getAllTodo);

/**
 * @swagger
 * /todo/getOneTodo/{todoID}:
 *   get:
 *     summary: Getting one todo data
 *     tags: [Todo]
 *     parameters:
 *       - name: todoID
 *         description: Todo ID
 *         type: string
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: The todo data has been recieved
 *       500:
 *         description: Some server error
 */

router.get("/getOneTodo/:todoID", getOneTodo);

/**
 * @swagger
 * /todo/updateTodo:
 *   patch:
 *     summary: Updating a todo data
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
 *         description: Todo data has been updated
 *       404:
 *         description: Todo cannot be updated
 *       500:
 *         description: Some server error
 */

router.patch("/updateTodo", updateTodo);

/**
 * @swagger
 * /todo/deleteTodo/{todoID}:
 *   delete:
 *     summary: Deleting a todo task
 *     tags: [Todo]
 *     parameters:
 *       - name: todoID
 *         description: Todo id
 *         type: string
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: The todo has been deleted
 *       500:
 *         description: Some server error
 */

router.delete("/deleteTodo/:todoID", deleteTodo);

/**
 * @swagger
 * /todo/updateStatusTodo:
 *   patch:
 *     summary: Update status of a task
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
 *         description: The status has been updated
 *       404:
 *         description: Status cannot be updated
 *       500:
 *         description: Some server error
 */
router.patch("/updateStatusTodo", updateStatusTodo);

module.exports = router;
