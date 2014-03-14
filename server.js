'use strict';
// jshint unused:false
// require('newrelic');
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.static(path.join(__dirname, 'build')));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var users = require('./api/routes/user_routes');

app.get('/api/v1/users/', users.collection);

app.post('/api/v1/users', users.createUser);

app.get('/api/v1/users/:id', users.findById);

app.put('/api/v1/users/:id', users.updateUser);

app.delete('/api/v1/users/:id', users.deleteUser);
// Redirect
app.get('/users*', function(req, res) {
  res.redirect('/#users' + req.params);
});
// Possible workaround for the above from Ivan...
// var backboneRouteNames = ['users', 'agendaItems', 'actionItems'];

var server = http.createServer(app);
server.listen(3000, function(){
  console.log('server running');
});
