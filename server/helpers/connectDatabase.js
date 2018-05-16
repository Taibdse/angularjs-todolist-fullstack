const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ng1-todolist', (err, success) => {
    if(!err) return console.log('Database connected');
    console.log(err.message);
    process.exit(1);
})
