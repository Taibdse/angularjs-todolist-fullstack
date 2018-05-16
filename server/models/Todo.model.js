const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    name:{type: String},
    note:{type: String},
    level:{type:Number, min:1, max:3},
    done:{type: Number, min: 0, max: 100}
})

const Todo = mongoose.model('newtodolist', todoSchema);

module.exports = Todo;