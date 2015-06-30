var express = require('express'); // framework Node.js
var path = require('path'); // path normalization
var logger = require('morgan'); // logger
var request = require('request'); // http requests' maker
var cookieParser = require('cookie-parser'); // populate request module cookies
var bodyParser = require('body-parser'); // middlewares
var react = require('react'); // building user interface
var Config = require('config'); // fichier js config

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var express = require('express');
var router = express.Router();

/* GET Home page. */
app.get('/home', function(req, res, next) {
    res.render('home', { title: 'Home' });
});

/* GET About page. */
app.get('/about', function(req, res, next) {
  res.render('about', { title: 'A propos' });
});

/* GET Contact page. */
app.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET Search page. */
app.get('/search', function(req, res, next) {
  res.render('search', { title: 'Search', requete: "" });
});

/* GET Gene page. */
app.get('/genes', function(req, res, next) {
  res.render('genes', { title: 'Genes', requete: "" });
});
app.get('/gene', function(req, res, next) {
  res.render('gene', { title: 'Gene', requete: "" });
});
app.get('/gene/:id', function(req, res, next) {
  res.set('id', req.param.id);
  res.render('gene', { title: 'Gene', requete: "" });
});

/* GET Maladie page. */
app.get('/maladies', function(req, res, next) {
  res.render('maladies', { title: 'Maladies', requete: "" });
});
app.get('/maladie', function(req, res, next) {
  res.render('maladie', { title: 'Maladie', requete: "" });
});
app.get('/maladie/:id', function(req, res, next) {
  res.set('id', req.param.id);
  res.render('maladie', { title: 'Maladie', requete: "" });
});

/* A SUPPRIMER EN PROD TEST PAGE*/
/* GET Test page. */
app.get('/test', function(req, res, next) {
  res.render('test', { title: 'Test'});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
