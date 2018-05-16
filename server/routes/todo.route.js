const express = require('express');
const todoRouter = express.Router();
const Todo = require('../models/Todo.model');
const ControllerTodo = require('../controllers/todo.controller');

todoRouter.get('/', ControllerTodo.renderHome);
todoRouter.get('/getAllTodo', ControllerTodo.getAllTodo);
todoRouter.post('/add', ControllerTodo.addTodo);
todoRouter.post('/delete', ControllerTodo.deleteTodo);
todoRouter.post('/update', ControllerTodo.updateTodo);

module.exports = { todoRouter };