var assert = require('assert');
var Profiler = require('..');

/**
 * TransitiveLoader Config
 */

var config = {
  from: {
    name: 'Start',
    lat: 38.86583312290139,
    lon: -77.06398626875051
  },
  to: {
    name: 'End',
    lat: 38.90485941802882,
    lon: -77.03453592419277
  },
  limit: 1
};

/**
 * OTP Endpoint
 */

var endpoint = 'http://localhost:8080/otp/routers/default';

/**
 * Mocha BDD
 */

describe('otpprofiler.js', function() {
  describe('#profile()', function() {
    it('should request a profile correctly', function(done) {
      var profiler = new Profiler({
        host: endpoint
      });

      profiler.profile(config, function(err, results) {
        if (err) return done(err);
        assert.deepEqual(results, require('./data/profile'));
        assert(results.options.length === 1);
        done();
      });
    });
  });

  describe('#routes()', function() {
    it('should request all of the available routes', function(done) {
      var profiler = new Profiler({
        host: endpoint
      });

      profiler.routes(function(err, results) {
        if (err) return done(err);
        assert.deepEqual(results, require('./data/routes'));
        done();
      });
    });
  });

  describe('#journey()', function() {
    it('should request patterns for a given O/D journey', function(done) {
      var profiler = new Profiler({
        host: endpoint,
        limit: 1
      });

      profiler.journey(config, function(err, results) {
        if (err) return done(err);
        assert.deepEqual(results, require('./data/journey'));
        done();
      });
    });
  });
});
