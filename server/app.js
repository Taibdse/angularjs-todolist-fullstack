const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const { todoRouter } = require('../server/routes/todo.route');
//database connection
require('./helpers/connectDatabase');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('client'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use('/', todoRouter);

app.listen(4000, () => console.log('Server started on port 4000'));