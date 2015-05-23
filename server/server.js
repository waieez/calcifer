var express = require('express');
var app = express();
var config = require('./config');
var route = require('./router');

config(app);
route(app);

module.exports = app;
