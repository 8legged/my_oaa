'use strict';
// jshint unused:false

var superagent = require('superagent');
var chai = require('chai'),
expect = chai.expect,
should = chai.should();
var app = require('../app').app;

describe('Meetings JSON api', function(){
    var id;

    it('get a collection', function(done){
        superagent.get('http://localhost:3000/api/v1/meetings').end(function(er,res) {
            expect(er).to.be.eql(null);

            done();
        });
    });

    // it('should be able to create a user', function(done){
    //     superagent.post('http://localhost:3000/api/v1/users')
    //       .send({first_name: 'Ford', last_name: 'Prefect', email: 'ford@theguide.com'})
    //       .end(function(err, res){
    //         expect(err).to.be.eql(null);
    //         expect(res.body.first_name).to.be.eql('Ford');

    //         id = res.body._id;
    //         done();
    //     });
    // });

    // it('should be able to find a user', function(done){
    //     superagent.get('http://localhost:3000/api/v1/users/' + id).end(function(e, res){
    //         expect(e).to.eql(null);
    //         expect(res.body._id).to.be.eql(id);
    //         expect(res.body.first_name).to.be.eql('Ford');
    //         expect(res.body.last_name).to.be.eql('Prefect');

    //         done();
    //     });
    // });

    // it('can update a user', function(done) {
    //     superagent.put('http://localhost:3000/api/v1/users/' + id).send({first_name: 'Arthur', last_name: 'Dent'})
    //     .end(function(e, res) {
    //         expect(e).to.eql(null);
    //         expect(res.body.msg).to.be.eql('success');

    //         done();
    //     });
    // });

    // it('can delete a user', function(done) {
    //     superagent.del('http://localhost:3000/api/v1/users/' + id).end(function(e, res) {
    //         expect(e).to.eql(null);
    //         expect(res.body.msg).to.be.eql('success');

    //         done();
    //     });
    // });
});;


