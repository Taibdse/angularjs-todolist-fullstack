const Todo = require('../models/Todo.model');

class ControllerTodo{
    static handleThen(success, res){
        if(success) return res.send({success: true});
        res.send({success: false});
    }

    static handleCatch(err, res){
        console.log(err.message);
        res.send({success: false});
    }

    static renderHome(req, res){
        res.render('home');
    }

    static getAllTodo(req, res){
        Todo.find({})
        .then(success => res.send({success: true, todolist: success}))
        .catch(err => {
            ControllerTodo.handleCatch(err, res);
        })
    }

    static addTodo(req, res){
        let newTodo = new Todo( req.body );
        newTodo.save()
        .then(success => {
            ControllerTodo.handleThen(success, res);
        })
        .catch(err => {
            ControllerTodo.handleCatch(err, res);
        });
    }

    static deleteTodo(req, res){
        Todo.findByIdAndRemove(req.body._id)
        .then(success => {
            ControllerTodo.handleThen(success, res);
        })
        .catch(err => {
            ControllerTodo.handleCatch(err, res);
        });
    }

    static updateTodo(req, res){
        const { _id, content } = req.body;
        Todo.findByIdAndUpdate(_id, content)
        .then(success => {
            ControllerTodo.handleThen(success, res);
        }).catch(err => {
            ControllerTodo.handleCatch(err, res);
        })
    }
}

module.exports = ControllerTodo;