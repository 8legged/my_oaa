'use strict'
// jshint unused:false

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.configure(function(){
    app.use(express.bodyParser());
    app.use(app.router);
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

var users = require('./routes/users');

app.get('/api/v1/users/', users.collection);

app.post('/api/v1/users', users.createUser);

app.get('/api/v1/users/:id', users.findById);

app.put('/api/v1/users/:id', users.updateUser);

app.delete('/api/v1/users/:id', users.deleteUser);

var server = http.createServer(app);
server.listen(3000, function(){
    console.log('server running');
});



