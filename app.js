var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');

//require('./model/db');
var routes = require('./routes/index');

var routesApi = require('./api/routes/index');

var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
app.set('port', (process.env.PORT || 5000));

// view engine setup
app.set('views', path.join(__dirname, '/client'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client')));

app.use('/api', routesApi);

app.use('/**', function(req, res) {
    //console.log("go home: "+req.path);
    res.sendfile(path.join(__dirname, 'client', 'index.html'));
});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
/*if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}*/

// production error handler
// no stacktraces leaked to user
/*app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});*/


app.listen(app.get('port'), function() {
  console.log('COBIT - Node app is running on port', app.get('port'));
});

module.exports = app;
