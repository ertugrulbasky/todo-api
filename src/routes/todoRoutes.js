const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/todos", todoController.getAllTodos);
router.post("/create-todo", todoController.createTodo);

router.put("/update-todo/:id", todoController.updateTodo);

router.delete("/delete-todo/:id", todoController.deleteTodo);

module.exports = router;
