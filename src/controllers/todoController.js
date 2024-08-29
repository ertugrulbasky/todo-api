const { Todo } = require("../models/index");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (!todos) {
      return res.status(400).json({
        success: false,
        message: "Todos not retrieved",
        todos: [],
      });
    }
    return res.status(200).json({
      success: true,
      message: "Todos retrieved successfully",
      todos: todos,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      completed: req.body.completed,
    });
    const todos = await Todo.create(todo);
    if (!todos) {
      return res.status(400).json({
        success: false,
        message: "Problem creating Todo",
        todo: null,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully created Todo",
      todo: todos,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const update = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (!update) {
      return res.status(400).json({
        success: false,
        message: "Not successfully updated",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Todo successfully updated",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteTodo = async (req, res) => {
    try {
        const deleteTodo = await Todo.findOneAndDelete({_id: req.params.id})
        if (!deleteTodo) {
          return res.status(400).json({
            success: false,
            message: 'Todo not deleted'
          })
        }
        return res.status(200).json({
          success: true,
          message: 'Todo successfully deleted'
        })
      } catch (error){
        return res.status(400).json({
          success: false,
          message: error.message
        })
      }
  };
