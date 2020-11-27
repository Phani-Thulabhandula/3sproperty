var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/post');
var postMessagesRouter = require('./routes/post_message');
var notificationsRouter = require('./routes/notification');


const passport = require('passport');
var bodyParser = require("body-parser");

var app = express();
require('./utils/passport');

app.use(session({
  genid: (req) => {
    return uuidv4() // use UUIDs for session IDs
  },
  cookie: { httpOnly: false },
  secret: 'keyboard dog',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'media')));




app.get('/auth', (req, res) => {
  console.log(`User authenticated? ${req.isAuthenticated()}`)
  if(req.isAuthenticated()) {
    console.log(req.user);
    res.send('you hit the authentication endpoint\n')
  } else {
    res.status(400).send('you hit the UNAUTH endpoint\n')
  }
})

app.use('/posts', postsRouter);
app.use('/users', usersRouter);
app.use('/post-messages', postMessagesRouter);
app.use('/notifications', notificationsRouter);


app.use('/', indexRouter)

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

module.exports = app;
