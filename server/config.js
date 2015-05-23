var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');

module.exports = function (app) {
  //middleware
  app.use(bodyparser.json());
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../client'));
}
