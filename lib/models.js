var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');

//var utils = require('./utils');

module.exports.OtpProfileRequest = Backbone.Model.extend({ 

  initialize: function(opts) {

    _.bindAll(this, 'request', 'processRequest');

    this.on('change', this.request);

  },

  defaults: {  
    from: null,
    to: null,
  },

  
  request: function() {

    var m = this;

    // don't make incomplete requests
    if(!this.attributes.from || !this.attributes.to)
      return false;

    $.ajax(this.urlRoot, { dataType: 'jsonp', data: this.attributes })
      .done(function(data) {
        m.trigger('success', m.processRequest(data));
      })
      .fail(function(data){
        m.trigger('failure', m.processRequest(data));
      });
  },

  processRequest: function(data) {

    var response = new OtpProfiler.models.OtpProfileResponse(data);

    response.set('request', this);

    return response;

  }
});


module.exports.OtpProfileResponse = Backbone.Model.extend({ 

  initialize: function(opts){

    var rawAttributes = arguments[0];
    
    if(rawAttributes) {

      var processedAttributes = _.omit(rawAttributes, ['options']);
    
      processedAttributes.options = new OtpProfiler.models.OtpProfileOptions();
      processedAttributes.options.add(rawAttributes['options']);

      this.set(processedAttributes);

    }

  },

  defaults: {  
    request: null,
    options: []
  }

});

module.exports.OtpProfileOption = Backbone.Model.extend({ 

  initialize: function(opts){

    var rawAttributes = arguments[0];
    var processedAttributes = _.omit(rawAttributes, ['segments']);
    
    processedAttributes.segments = new OtpProfiler.models.OtpProfileOptionSegments();
    processedAttributes.segments.add(rawAttributes['segments']);

    this.set(processedAttributes);

  },

  defaults: {  
    finalWalkTime: null,
    stats: null,
    summary: null,
    segments: []
  },

  getPatternIds: function(maxPerSegment) {
    var patternIds = [];

    _.each(this.get('segments').models, function(segment) {
      var segmentPatternIds = segment.getPatternIds(maxPerSegment);
      for(var i=0; i < segmentPatternIds.length; i++) {
        var patternId = segmentPatternIds[i];
        if(!_.contains(patternIds, patternId)) patternIds.push(patternId);
      }
    });

    return patternIds;
  }

});

module.exports.OtpProfileOptions = Backbone.Collection.extend({ 
      
  type: 'OtpProfileOptions',
  model: module.exports.OtpProfileOption,

  initialize : function() {
  },

});


module.exports.OtpProfileOptionSegment = Backbone.Model.extend({ 

  initialize: function(opts){

    var rawAttributes = arguments[0];
    var processedAttributes = _.omit(rawAttributes, ['segmentPatterns']);
    
    processedAttributes.segmentPatterns = new OtpProfiler.models.OtpProfileOptionSegmentPatterns();
    processedAttributes.segmentPatterns.add(rawAttributes['segmentPatterns']);

    this.set(processedAttributes);

  },

  defaults: {  
    from: null,
    fromName: null,
    rideStats: null,
    route: null,
    routeLongName: null,
    routeShortName: null,
    segmentPatterns: [],
    to: null,
    toName: null,
    waitStats: null,
    walkTime: null
  },

  getPatternIds: function(max) {
    var patternIds = [];
    _.each(this.get('segmentPatterns').models, function(pattern, i) {
      if(max && i >= max) return;
      patternIds.push(pattern.get('patternId'));
    });

    return patternIds;
  }  

});

module.exports.OtpProfileOptionSegments = Backbone.Collection.extend({ 
      
  type: 'OtpProfileOptionSegments',
  model: module.exports.OtpProfileOptionSegment,

  initialize : function() {
  },

});


module.exports.OtpProfileOptionSegmentPattern = Backbone.Model.extend({ 

  initialize: function(opts){

    var rawAttributes = arguments[0];
    this.set(rawAttributes);

  },

  defaults: {  
    fromIndex: null,
    nTrips: null,
    patternId: null,
    toIndex: null,
  }

});

module.exports.OtpProfileOptionSegmentPatterns = Backbone.Collection.extend({ 
      
  type: 'OtpProfileOptionSegments',
  model: module.exports.OtpProfileOptionSegmentPattern,

  initialize : function() {
  },

});


/** index models **/


module.exports.OtpIndexPatternRequest = Backbone.Model.extend({ 

  initialize: function(opts) {

    _.bindAll(this, 'request', 'processRequest');

    this.on('change', this.request);

  },

  defaults: {  
    from: null,
    to: null,
  },

  
  request: function() {

    var m = this;

    $.ajax(this.urlRoot, { dataType: 'jsonp', data: this.attributes })
      .done(function(data) {
        m.trigger('success', m.processRequest(data));
      })
      .fail(function(data){
        m.trigger('failure', m.processRequest(data));
      });
  },

  processRequest: function(data) {

    var response = new OtpProfiler.models.OtpIndexPattern(data);

    response.set('request', this);

    return response;
  }
});


module.exports.OtpIndexPattern = Backbone.Model.extend({ 

  initialize: function(opts) {

    var rawAttributes = arguments[0];
    var processedAttributes = _.omit(rawAttributes, ['stops', 'trips']);
    
    processedAttributes.stops = new OtpProfiler.models.OtpIndexStops();
    processedAttributes.stops.add(rawAttributes['stops']);

    processedAttributes.trips = new OtpProfiler.models.OtpIndexTrips();
    processedAttributes.trips.add(rawAttributes['trips']);

    this.set(processedAttributes);

  },

  defaults: {  
    desc: null,
    id: null,
    routeId: null,
    stops: [],
    trips: []
  }

});


module.exports.OtpIndexStop = Backbone.Model.extend({ 

  initialize: function(opts){

    var rawAttributes = arguments[0];
    this.set(rawAttributes);

  },

  defaults: {  
    agency: null,
    id: null,
    lat: null,
    lon: null,
    name: null
  }

});

module.exports.OtpIndexStops = Backbone.Collection.extend({ 
      
  type: 'OtpIndexStops',
  model: module.exports.OtpIndexStop,

  initialize : function() {
  }

});



module.exports.OtpIndexTrip = Backbone.Model.extend({ 

  initialize: function(opts){

    var rawAttributes = arguments[0];
    this.set(rawAttributes);

  },

  defaults: {  
    agency: null,
    direction: null,
    id: null,
    serviceId: null,
    shapeId: null,
    tripHeadsign: null,
  }

});

module.exports.OtpIndexTrips = Backbone.Collection.extend({ 
      
  type: 'OtpIndexTrips',
  model: module.exports.OtpIndexTrip,

  initialize : function() {
  }

});
