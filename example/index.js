var OtpProfiler = require('otpprofilerjs');

var $ = require('jquery');

$(document).ready(function() {


	/*$('#result').html('loading..');

	var requestModel = new OtpProfiler.models.OtpProfileRequest({
		from: "38.890519,-77.086252",
		to: "38.896888,-77.006332"
	});
	requestModel.urlRoot = 'http://arlington.dev.conveyal.com/otp/otp-rest-servlet/profile';

    requestModel.on('success', function(response) {
    	console.log("response:");
    	console.log(response);
        //responseView.newResponse(response);
    });

	requestModel.request();*/

	var config = {
	  maxOptions: 1,
	  fromLocation: {
	    name: 'Start',
	    lat: 38.895,
	    lon: -77.09
	  },
	  toLocation: {
	    name: 'End',
	    lat: 38.894,
	    lon: -77.01
	  }
	};


	var localResponse = new OtpProfiler.models.OtpProfileResponse(PROFILE);

	var endpoint = 'http://arlington.dev.conveyal.com/otp/otp-rest-servlet/';
	var TransitiveLoader = new OtpProfiler.transitive.TransitiveLoader(localResponse, endpoint, function(transiveData) {
		console.log("generated transitive data:");
		console.log(transiveData);
	}, config);
});