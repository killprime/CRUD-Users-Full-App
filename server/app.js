// load all env variables from .env file into process.env object.
require('dotenv').config()

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const appRoot = require('app-root-path');

const app = express();

const users = require('./api/users');

app.use(express.static(appRoot + '/'));
app.use(express.static(appRoot + '/dist'));

app.use(cookieParser());

app.use('/api/v1/users', users);

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: './dist' });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
