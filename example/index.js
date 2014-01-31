var OtpProfiler = require('otpprofilerjs');

var $ = require('jquery');

$(document).ready(function() {

	var requestModel = new OtpProfiler.models.OtpProfileRequest({
		from: "38.890519,-77.086252",
		to: "38.896888,-77.006332"
	});
	requestModel.urlRoot = 'http://arlington.dev.conveyal.com/otp/otp-rest-servlet/profile';

    requestModel.on('success', function(response) {
    	console.log("response:");
    	console.log(response);
    });

	requestModel.request();
});