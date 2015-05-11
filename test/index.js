var should = require("should");

var Forecastio_weathericons = require('../index');

describe("Forecastio_weathericons", function() {
	it("should accept currently supported Forecast.io icons", function() {
		var supported = [
			"clear-day",
			"clear-night",
			"rain",
			"snow",
			"sleet",
			"wind",
			"fog",
			"cloudy",
			"partly-cloudy-day",
			"partly-cloudy-night"
		];
		for (var index = 0; index < supported.length; index++) {
			Forecastio_weathericons.translate(supported[index] ).should.be.instanceof(String);
		};
	});

	it("should return undefined for non-supported values", function() {
		var invalidValue = Forecastio_weathericons.translate(undefined);
		should(invalidValue).not.be.ok;
	});
});