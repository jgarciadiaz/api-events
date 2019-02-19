const WeatherModel = require('../model/weatherModel')

function saveWeatherReport(report) {
  return new WeatherModel(report).save()
}

module.exports.saveWeatherReport = saveWeatherReport
