function Forecastio_weathericons() {
	this.translationTable = {
		"clear-day" : "wi-day-sunny",
		"clear-night" : "wi-night-clear",
		"rain" : "wi-rain",
		"snow" : "wi-snow",
		"sleet" : "wi-sleet",
		"wind" : "wi-windy",
		"fog" : "wi-fog",
		"cloudy" : "wi-cloudy",
		"partly-cloudy-day" : "wi-day-cloudy",
		"partly-cloudy-night" : "wi-night-cloudy"
	};
	this.translate = function(forecastIOIcon) {
		var result = this.translationTable[forecastIOIcon];
		if (result == undefined)
		{
			console.log("Unhandled Forecast.io Icon, please report to developers: '" + forecastIOIcon  + "'");
		}
		return result;
	};

	return this;
}

module.exports = exports = new Forecastio_weathericons();