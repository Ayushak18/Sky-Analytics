var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://ayush:VlLXslmMmHQTIDEq@countrydata.ps7ro.mongodb.net/Sky?retryWrites=true&w=majority',
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Database Connected');
    }
  }
);

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
