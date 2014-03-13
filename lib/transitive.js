var _ = require('underscore');

var OtpProfiler = {};
OtpProfiler.models = require('./models');

/**
 * Expose `TransitiveLoader`
 */

module.exports.TransitiveLoader = TransitiveLoader;

/**
 *
 */

function TransitiveLoader(profileResponse, endpoint, callback, config) {

  this.callback = callback;
  this.endpoint = endpoint;
  this.config = config || {};

  this.options = [];
  this.patterns = {};
  this.stops = {};
  this.routes = {};
  
  this.usedRouteIds = []; // list of route IDs that are used by patterns in this response

  var routesRequest = new OtpProfiler.models.OtpIndexRoutesRequest();
  routesRequest.urlRoot = this.endpoint + 'index/routes/';

  routesRequest.on('success', _.bind(function(routesCollection) {
    routesCollection.each(function(routeModel) {
      this.routes[routeModel.getId()] = routeModel;
    }, this);

    this.loadPatterns(profileResponse);

  }, this));
  routesRequest.request();
}


TransitiveLoader.prototype.loadPatterns = function(profileResponse) {

  // construct the list of patterns to load
  _.each(profileResponse.get('options').models, function(optionModel, i) {
    if (this.config.maxOptions && i >= this.config.maxOptions) return;

    optionModel.getPatternIds(1).forEach(function(patternId) {
      this.patterns[patternId] = null;
    }, this);

    this.options.push(optionModel);
  }, this);

  this.patternsLoaded = 0;
  for (var patternId in this.patterns) {
    this.loadPattern(patternId);
  }

};


TransitiveLoader.prototype.loadPattern = function(patternId) {

  var patternRequest = new OtpProfiler.models.OtpIndexPatternRequest();
  patternRequest.urlRoot = this.endpoint + 'index/patterns/' + patternId;

  patternRequest.on('success', _.bind(function(patternModel) {

    this.patterns[patternId] = patternModel;

    this.patternsLoaded++;
    if (this.patternsLoaded === Object.keys(this.patterns).length) {
      this.allPatternsLoaded();
    }
  }, this));
  patternRequest.request();

};

TransitiveLoader.prototype.allPatternsLoaded = function() {

  // initialize the stop key/value store
  for (var patternId in this.patterns) {
    var pattern = this.patterns[patternId];
    var routeId = pattern.get('routeId');
    if(this.usedRouteIds.indexOf(routeId) === -1) this.usedRouteIds.push(routeId);
    for (var i = 0; i < pattern.get('stops').length; i++) {
      var stop = pattern.get('stops').at(i);
      if (this.stops.hasOwnProperty(stop.get('stopId'))) continue;
      this.stops[stop.getId()] = stop;
    }
  }

  this.callback.call(this, this.getTransitiveData());
};

TransitiveLoader.prototype.getTransitiveData = function() {

  var data = {};

  // set up the stops collection
  data.stops = [];
  for (var stopId in this.stops) {
    var stop = this.stops[stopId];
    data.stops.push({
      stop_id: stopId,
      stop_name: stop.get('name'),
      stop_lat: stop.get('lat'),
      stop_lon: stop.get('lon')
    });
  }

  // set up the routes collection
  data.routes = [];
  for(var i = 0; i < this.usedRouteIds.length; i++) {
    var routeModel = this.routes[this.usedRouteIds[i]];
    data.routes.push({
      agency_id: routeModel.get('agency'),
      route_id: routeModel.getId(),
      route_short_name: routeModel.get('shortName'),
      route_long_name: routeModel.get('longName'),
      route_type: getGtfsRouteType(routeModel.get('mode')),
      route_color: routeModel.get('color')
    });
  }

  // set up the patterns collection
  data.patterns = [];
  _.each(this.patterns, function(patternModel, patternId) {
    var patternObj = {
      pattern_id: patternId,
      stops: []
    };

    if (patternModel.has('desc')) patternObj.pattern_name = patternModel.get(
      'desc');
    if (patternModel.has('routeId')) patternObj.route_id = patternModel.get(
      'routeId');

    patternModel.get('stops').models.forEach(function(stopModel) {
      patternObj.stops.push({
        stop_id: stopModel.getId()
      });
    });

    data.patterns.push(patternObj);
  });

  // set up places
  data.places = [];
  if (this.config.fromLocation) {
    data.places.push({
      place_id: 'from',
      place_name: this.config.fromLocation.name,
      place_lat: this.config.fromLocation.lat,
      place_lon: this.config.fromLocation.lon
    });
  }
  if (this.config.toLocation) {
    data.places.push({
      place_id: 'to',
      place_name: this.config.toLocation.name,
      place_lat: this.config.toLocation.lat,
      place_lon: this.config.toLocation.lon
    });
  }

  // set up journeys
  data.journeys = [];
  _.each(this.options, function(optionModel, i) {
    var journey = {
      journey_id: 'option_' + i,
      journey_name: optionModel.get('summary') || 'Option ' + (i + 1),
      segments: []
    };

    // add the start walk segment
    if (this.config.fromLocation) {
      var firstPattern = optionModel.get('segments').at(0).get(
        'segmentPatterns').at(0);
      var boardStop = this.patterns[firstPattern.get('patternId')].get(
        'stops').at(firstPattern.get('fromIndex'));
      var startSegment = {
        type: 'WALK',
        from: {
          type: 'PLACE',
          place_id: 'from'
        },
        to: {
          type: 'STOP',
          stop_id: boardStop.getId()
        }
      };

      journey.segments.push(startSegment);
    }

    // iterate through the transit segments
    _.each(optionModel.get('segments').models, function(segmentModel,
      segmentIndex) {

      // add the transit segment to the journey object
      var firstPattern = segmentModel.get('segmentPatterns').at(0);
      var transitSegment = {
        type: 'TRANSIT',
        pattern_id: firstPattern.get('patternId'),
        from_stop_index: firstPattern.get('fromIndex'),
        to_stop_index: firstPattern.get('toIndex')
      };

      journey.segments.push(transitSegment);

      // do we need a walk transfer segment?
      if (optionModel.get('segments').length > segmentIndex + 1) {
        var alightStop = this.patterns[firstPattern.get('patternId')].get(
          'stops').at(firstPattern.get('toIndex'));
        var nextSegment = optionModel.get('segments').at(segmentIndex + 1);
        var nextFirstPattern = nextSegment.get('segmentPatterns').at(0);
        var boardStop = this.patterns[nextFirstPattern.get('patternId')].get(
          'stops').at(nextFirstPattern.get('fromIndex'));

        if (alightStop.getId() !== boardStop.getId()) {
          var transferSegment = {
            type: 'WALK',
            from: {
              type: 'STOP',
              stop_id: alightStop.getId()
            },
            to: {
              type: 'STOP',
              stop_id: boardStop.getId()
            }
          };

          journey.segments.push(transferSegment);
        }
      }
    }, this);

    // add the end walk segment
    if (this.config.fromLocation) {
      var lastPattern = optionModel.get('segments').at(optionModel.get(
        'segments').length - 1).get('segmentPatterns').at(0);
      var alightStop = this.patterns[lastPattern.get('patternId')].get(
        'stops').at(lastPattern.get('toIndex'));

      var endSegment = {
        type: 'WALK',
        from: {
          type: 'STOP',
          stop_id: alightStop.getId()
        },
        to: {
          type: 'PLACE',
          place_id: 'to'
        }
      };

      journey.segments.push(endSegment);
    }

    data.journeys.push(journey);
  }, this);

  return data;
};


function getGtfsRouteType(otpMode) {
  if(otpMode === 'TRAM') return 0;
  if(otpMode === 'SUBWAY') return 1;
  if(otpMode === 'RAIL') return 2;
  if(otpMode === 'BUS') return 3;
  if(otpMode === 'FERRY') return 4;
  if(otpMode === 'CABLE_CAR') return 5;
  if(otpMode === 'GONDOLA') return 6;
  if(otpMode === 'FUNICULAR') return 7;
}