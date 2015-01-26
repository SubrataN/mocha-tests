process.env.TEST = 'true';

var should 	= require('should');
var assert 	= require('assert');
var request = require('supertest');
var winston = require('winston');
var expect 	= require('expect.js');
var express = require('express');
var config 	= require('config');
 

var url = "https://minkasu-dev.herokuapp.com/v1/customer/1234/devices/54c5eff20f5e9c0300669eeb";


describe('Suite#1 : SingleDevice', function() {
	
	before(function(){
		console.log("config="+JSON.stringify(config));
		
	});
	
	it('-should get a single device', function(done) {
		
			
			request(url).get()
						.set("",config.auth.header)
						.end(function(err, res) {
						console.log(request);
							
			if (err) {
				console.log(err);
			}
			expect(res).to.exist;
			expect(res.status).to.equal(200);
			expect(res.type).to.contain('json');
			
			res.body.should.have.property("_id");
			res.body.should.have.property("uuid");
			res.body.should.have.property("customerId");
			
			done();
		});
	});
	

});	
