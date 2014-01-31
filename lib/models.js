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

    console.log(data);
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
    this.set(rawAttributes);

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
