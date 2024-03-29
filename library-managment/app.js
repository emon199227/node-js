 require("dotenv").config(); 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
const multer = require("multer");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
const expHbs = require('express3-handlebars');
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var indexRouter = require('./routes/index');


var app = express();

/**
 * Make MongoDB connection
 */
(async () => {
	await mongoose.connect('mongodb+srv://emon:emon@cluster0.3kjg8uh.mongodb.net/lms');
    //await mongoose.connect('mongodb://127.0.0.1:27017/lms');
})();


app.engine('hbs', expHbs({defaultLayout: 'layout', extname: '.hbs'}))
app.set('view engine', 'hbs')
//session save 
app.use(session({
  secret:'asdflkjhgqwertpoiuyzxcvmnbasdflkj',
  resave: false,
  saveUninitialized:false
}));

app.set(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//parse application / x-www-urencoder 
app.use(bodyParser.urlencoded({extended:false}))

//parse application json 
app.use(bodyParser.json())

app.use('/', indexRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

module.exports = app;