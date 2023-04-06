const asyncHandler = require("../middleware/async");
const Todo = require("../models/todo");

exports.createTodo = asyncHandler(async (req, res, next) => {
  const { title, content, userId } = req.body;

  console.log(userId)

  try {
    const newTodo = await Todo.create({
      title,
      content,
      user: userId,
    });

    res.status(200).json({
      success: true,
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
      msg: "Server error",
    });
  }
});

exports.getAllTodo = asyncHandler(async (req, res, next) => {
  const userId = req.params.userId;

  console.log("user", userId);

  try {
    const getTodo = await Todo.find({ user: userId });

    res.status(200).json({
      success: true,
      data: getTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
      msg: "Server error",
    });
  }
});

exports.getOneTodo = asyncHandler(async (req, res, next) => {
  const todoID = req.params.todoID;

  try {
    const findOneTodo = await Todo.findOne({
      _id: todoID,
    });

    if (!findOneTodo) {
      return res.status(404).json({
        success: false,
        error: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      data: findOneTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
      msg: "Server, error",
    });
  }
});

exports.deleteTodo = asyncHandler(async (req, res, next) => {
  const todoID = req.params.todoID;

  try {
    const deleteTodo = await Todo.findOneAndDelete({
      _id: todoID,
    });
    if (!deleteTodo) {
      return res.status(404).json({
        success: false,
        error: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      msg: "Todo deleted succesfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
      msg: "Server error",
    });
  }
});

exports.updateTodo = asyncHandler(async (req, res, next) => {
  const { title, content, todoID } = req.body;

  try {
    const updateTodo = await Todo.findOneAndUpdate(
      { _id: todoID },
      { title, content },
      { new: true } //return the new todo insted of old one
    );

    if (!updateTodo) {
      return res.state(404).json({
        success: false,
        error: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updateTodo,
      msg: "Successfully updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
      msg: "Server error",
    });
  }
});

exports.updateStatusTodo = asyncHandler(async (req, res, next) => {
  const { taskId, status } = req.body;
  console.log(taskId, status);

  try {
    const updateStatus = await Todo.findOneAndUpdate(
      { _id: taskId },
      { status: status },
      { new: true }
    );

    if (!updateStatus) {
      return res.status(404).json({
        success: false,
        msg: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updateStatus,
      msg: "Todo status updated.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error,
      msg: "Server error",
    });
  }
});
