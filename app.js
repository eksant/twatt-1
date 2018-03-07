require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/twatts', require('./routes/twatts'));


module.exports = app;
