var assert 	= require("assert");
var should 	= require("should");
var request = require('supertest');
var expect 	= require('expect.js');
var config 	= require('config');

var url = "https://minkasu-dev.herokuapp.com/v1/customer/123/devices" ;
 
describe('Suite#1 : CreateDevice', function() {
	
	it('-should pass a new device-config,status=200', function(done) {
		
		//set the request body
		var map = {};
		
		map["name"]="XYZs' iPhone";
		map["platform"]="ios";
		map["os"]="iOS 8.0.1";
		map["uuid"]="uuid_3000689123";
		map["notifToken"]="dec85084da34353b95106d3d14264cb16d286029c29445f4e806e5cf33cfd441";
		map["cookie"]="cookie_1234";
		map["reinstall"]="false";
		map["timezone"]="PST"; 	
		
		
		//post the request
		request.post(url)
					.set("",config.auth.header)
					.set("Content-Type", "application/json")
					.send(map)
					.end(function(err, res) {
							
			if (err) {
				console.log(err);
			}
			expect(res).to.exist;
			
			res.should.have.status(200);
			var dcResourcePath = res.header["location"];
			console.log("\nLocation="+dcResourcePath);
			res.should.have.header["location"];
			
			res.body.should.have.property("name",map["name"]);
			res.body.should.have.property("platform",map["platform"]);
			res.body.should.have.property("os",map["os"]);
			res.body.should.have.property("uuid",map["uuid"]);
			res.body.should.have.property("notifToken",map["notifToken"]);
			
			
			done();
		});
	});

	
});