var expect = require("chai").expect;
var request = require('supertest');
var sinon = require('sinon');

var app = require('.././server/server');

describe('basic server', function() {
  it('should work', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        done();
      });
  });
});
