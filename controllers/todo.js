const asyncHandler = require("../middleware/async");
const Todo = require("../models/todo");

exports.createTodo = asyncHandler(async (req, res, next) => {
    console.log('called')
  const { title, content, userId } = req.body;

  console.log(title, content, userId)

  try {
    const newTodo = await Todo.create({
      title,
      content,
    });
    
    console.log('new todo', newTodo)

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
  const userId = req.params.id;

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
  const todoID = req.params.id;

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
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
      msg: "Server, error",
    });
  }
});

exports.deleteTodo = asyncHandler(async (req, res, next) => {
  const todoID = req.params.id;

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
  const todoID = req.params.id;
  const { title, content } = req.body;

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
