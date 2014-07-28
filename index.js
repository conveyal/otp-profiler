var Batch = require('batch');
var clone, each;
var superagent = require('superagent');

try {
  clone = require('clone');
  each = require('each');
} catch (e) {
  clone = require('component-clone');
  each = require('component-each');
}

/**
 * Expose `Profiler`
 */

module.exports = Profiler;

/**
 * "store" routes & pattens
 */

var store = {
  patterns: {},
  routes: null
};

/**
 * Profiler
 *
 * @param {Object} options
 */

function Profiler(opts) {
  if (!(this instanceof Profiler)) return new Profiler(opts);
  if (!opts.host) throw new Error('Profiler requires a host.');

  this.host = opts.host;
  this.limit = opts.limit || 3;
}

/**
 * Get a journey.
 *
 * @param {Object} options
 * @param {Function} callback
 */

Profiler.prototype.journey = function(opts, callback) {
  var batch = new Batch();
  var profiler = this;

  // If a profile isn't passed, retrieve the profile
  batch.push(function(done) {
    if (opts.profile) {
      done(null, opts.profile);
    } else {
      profiler.profile(opts, done);
    }
  });

  // Get routes asynchronously
  batch.push(function(done) {
    if (opts.routes) {
      done(null, opts.routes);
    } else {
      profiler.routes(done);
    }
  });

  batch.end(function(err, results) {
    if (err) {
      callback(err);
    } else {
      opts.profile = results[0];
      opts.routes = results[1];

      profiler.patterns(opts, function(err, patterns) {
        if (err) {
          callback(err);
        } else {
          opts.patterns = patterns;
          callback(null, profiler.convertOtpData(opts));
        }
      });
    }
  });
};

/**
 * Convert OTP data into a consumable format
 *
 * @param {Object} options
 * @return {Object} data
 */

Profiler.prototype.convertOtpData = function(opts) {
  console.log(opts);
  var data = {
    journeys: [],
    patterns: [],
    places: [],
    routes: [],
    stops: []
  };

  var routeIds = [];
  var stopIds = [];

  // Get a pattern by passing in the id
  var getPattern = function(id) {
    for (var i = 0; i < opts.patterns.length; i++) {
      var pattern = opts.patterns[i];
      if (pattern.id === id) return pattern;
    }
  };

  // Collect all unique stops
  each(opts.patterns, function(pattern) {
    // Store all used route ids
    if (routeIds.indexOf(pattern.routeId) === -1) routeIds.push(pattern.routeId);

    each(pattern.stops, function(stop) {
      if (stopIds.indexOf(stop.id) === -1) {
        // TODO: Just use normal names
        data.stops.push({
          stop_id: stop.id,
          stop_name: stop.name,
          stop_lat: stop.lat,
          stop_lon: stop.lon
        });
        stopIds.push(stop.id);
      }
    });
  });

  // Collect routes
  each(opts.routes, function(route) {
    if (routeIds.indexOf(route.id) !== -1) {
      // TODO: Just use normal names
      data.routes.push({
        agency_id: route.agency,
        route_id: route.id,
        route_short_name: route.shortName,
        route_long_name: route.longName,
        route_type: getGtfsRouteType(route.mode),
        route_color: route.color
      });
    }
  });

  // Collect patterns
  each(opts.patterns, function(pattern) {
    // TODO: Just use normal names
    var obj = {
      pattern_id: pattern.id,
      stops: []
    };

    if (pattern.desc) obj.pattern_name = pattern.desc;
    if (pattern.routeId) obj.route_id = pattern.routeId;

    each(pattern.stops, function(stop) {
      obj.stops.push({
        stop_id: stop.id
      });
    });

    data.patterns.push(obj);
  });

  // Collect places
  // TODO: Remove this
  if (opts.from) {
    data.places.push({
      place_id: 'from',
      place_name: opts.from.name,
      place_lat: opts.from.lat,
      place_lon: opts.from.lon
    });
  }

  if (opts.to) {
    data.places.push({
      place_id: 'to',
      place_name: opts.to.name,
      place_lat: opts.to.lat,
      place_lon: opts.to.lon
    });
  }

  // Collect journeys
  each(opts.profile.options, function(option, optionIndex) {

    // handle non-transit option as a special case
    if (option.segments.length === 0) {
      var summary = option.summary.toUpperCase();
      if(summary === 'WALK' || summary === 'BICYCLE' || summary === 'CAR') {
        data.journeys.push(processNonTransitOption(option, optionIndex));
      }
      return; // ignore other non-transit journeys (e.g. walk-only) completely
    }

    // process option as transit journey

    var journey = {
      journey_id: 'option_' + optionIndex,
      journey_name: option.summary || 'Option ' + (optionIndex + 1),
      segments: []
    };

    // Add the starting walk segment
    if (opts.from) {
      var firstPattern = option.segments[0].segmentPatterns[0];
      var boardStop = getPattern(firstPattern.patternId).stops[firstPattern.fromIndex];

      journey.segments.push({
        type: 'WALK',
        from: {
          type: 'PLACE',
          place_id: 'from'
        },
        to: {
          type: 'STOP',
          stop_id: boardStop.id,
        }
      });
    }

    each(option.segments, function(segment, segmentIndex) {
      // Add the transit segment
      var firstPattern = segment.segmentPatterns[0];
      journey.segments.push({
        type: 'TRANSIT',
        pattern_id: firstPattern.patternId,
        from_stop_index: firstPattern.fromIndex,
        to_stop_index: firstPattern.toIndex
      });

      // Add a walk segment
      if (option.segments.length > segmentIndex + 1) {
        var alightStop = getPattern(firstPattern.patternId).stops[
          firstPattern.toIndex];
        var nextSegment = option.segments[segmentIndex + 1];
        var nextFirstPattern = nextSegment.segmentPatterns[0];
        var boardStop = getPattern(nextFirstPattern.patternId).stops[
          nextFirstPattern.fromIndex];

        if (alightStop.id !== boardStop.id) {
          journey.segments.push({
            type: 'WALK',
            from: {
              type: 'STOP',
              stop_id: alightStop.id
            },
            to: {
              type: 'STOP',
              stop_id: boardStop.id
            }
          });
        }
      }
    });

    // Add the ending walk segment
    if (opts.to) {
      var lastPattern = option.segments[option.segments.length - 1].segmentPatterns[
        0];
      var alightStop = getPattern(lastPattern.patternId).stops[lastPattern.toIndex];

      journey.segments.push({
        type: 'WALK',
        from: {
          type: 'STOP',
          stop_id: alightStop.id
        },
        to: {
          type: 'PLACE',
          place_id: 'to'
        }
      });
    }

    // Add the journey
    data.journeys.push(journey);
  });

  return data;
};

function processNonTransitOption(option, optionIndex) {
  var journey = {
    journey_id: 'option_' + optionIndex,
    journey_name: option.summary.toUpperCase(),
    segments: []
  };

  var turnPoints = [];
  if(option.walkSteps) {
    for(var i = 1; i < option.walkSteps.length; i++) {
      var step = option.walkSteps[i];
      turnPoints.push({
        lat: step.lat,
        lon: step.lon,
        relativeDirection: step.relativeDirection,
        inStreet: option.walkSteps[i-1].streetName,
        outStreet: step.streetName
      });
    }
  }

  journey.segments.push({
    type: option.summary.toUpperCase(),
    from: {
      type: 'PLACE',
      place_id: 'from'
    },
    to: {
      type: 'PLACE',
      place_id: 'to',
    },
    turnPoints : turnPoints
  });

  return journey;
}


/**
 * Patterns
 *
 * @param {Object} options
 * @param {Function} callback
 */

Profiler.prototype.patterns = function(opts, callback) {
  var batch = new Batch();
  var profiler = this;

  // Get all unique pattern IDs
  var ids = this.getUniquePatternIds(opts.profile);

  // Load all the patterns
  each(ids, function(id) {
    batch.push(function(done) {
      profiler.pattern(id, done);
    });
  });

  batch.end(callback);
};

/**
 * Get unique pattern ids from a profile
 *
 * @param {Object} profile
 * @return {Array} of pattern ids
 */

Profiler.prototype.getUniquePatternIds = function(profile) {
  var ids = [];

  // Iterate over each option and add the pattern if it does not already exist
  each(profile.options, function(option, index) {
    each(option.segments, function(segment) {
      each(segment.segmentPatterns, function(pattern) {
        if (ids.indexOf(pattern.patternId) === -1) {
          ids.push(pattern.patternId);
        }
      });
    });
  });

  return ids;
};

/**
 * Load a pattern
 *
 * @param {String} id
 * @param {Function} callback
 */

Profiler.prototype.pattern = function(id, callback) {
  if (store.patterns[id]) {
    callback(null, store.patterns[id]);
  } else {
    this.request('/index/patterns/' + encodeURIComponent(id), function(err,
      pattern) {
      if (err) {
        callback(err);
      } else {
        store.patterns[id] = pattern;
        callback(null, pattern);
      }
    });
  }
};

/**
 * Profile
 *
 * @param {Object} query parameters to pass in
 * @param {Function} callback
 */

Profiler.prototype.profile = function(params, callback) {
  var qs = clone(params);
  qs.from = params.from.lat + ',' + params.from.lon;
  qs.to = params.to.lat + ',' + params.to.lon;

  // Options limit
  qs.limit = qs.limit || this.limit;

  // Remove invalid options
  delete qs.profile;
  delete qs.routes;

  // Request the profile
  this.request('/profile', qs, callback);
};

/**
 * Routes. Get an index of all routes available.
 *
 * @param {Function} callback
 */

Profiler.prototype.routes = function(callback) {
  if (store.routes !== null) {
    callback(null, store.routes);
  } else {
    this.request('/index/routes', function(err, routes) {
      if (err) {
        callback(err);
      } else {
        store.routes = routes;
        callback(null, routes);
      }
    });
  }
};

/**
 * Request
 *
 * @param {String} path
 * @param {Function} callback
 */

Profiler.prototype.request = function(path, params, callback) {
  if (arguments.length === 2) {
    callback = params;
    params = null;
  }

  superagent
    .get(this.host + path)
    .query(params)
    .end(function(err, res) {
      if (err || res.error || !res.ok) {
        callback(err || res.error || res.text);
      } else {
        callback(null, res.body);
      }
    });
};

/**
 * Get GTFS Route Type
 *
 * @param {String} mode
 */

function getGtfsRouteType(mode) {
  switch (mode) {
    case 'TRAM':
      return 0;
    case 'SUBWAY':
      return 1;
    case 'RAIL':
      return 2;
    case 'BUS':
      return 3;
    case 'FERRY':
      return 4;
    case 'CABLE_CAR':
      return 5;
    case 'GONDOLA':
      return 6;
    case 'FUNICULAR':
      return 7;
  }
}
