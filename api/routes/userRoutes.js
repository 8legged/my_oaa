'use strict';
var User = require('../models/User');

exports.collection = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    User.find({}, function(err, users) {
      res.send(JSON.stringify(users));
    });
  };

exports.createUser = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var user = new User(req.body);
  user.save(function(err, responseUser) {
    if(err) {
      res.writeHead(500);
      res.send({'error': err});
    } else {
      res.send(responseUser);
    }
  });
};

exports.findById = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var id = req.params.id;
  User.findOne({'_id': String(id)}, function(err, responseUser) {
    if(err) {
      res.send({'error': err});
    } else {
      res.send(responseUser);
    }
  });
};

exports.updateUser = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var id = req.params.id;
// Delete id from Backbone's request before sending to Mongoose
  delete req.body._id;
  var user = req.body;
  User.update({'_id': String(id)}, user, function(err) {
    if(err) {
      res.send({'error': err});
    } else {
      res.send({msg: 'success'});
    }
  });
};

exports.deleteUser = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var id = String(req.params.id);
  User.remove({'_id': id}, function(err) {
    if(err) {
      res.send({'error': err});
    } else {
      res.send({'msg': 'success'});
    }
  });
};
