const mongoose = require('mongoose')

const WeatherSchema = new mongoose.Schema({
  celsius: String,
  fahrenheit: String,
  pressure: String,
  relativeHumidity: String,
  lightLevel: String,
  city: String,
  gps: String,
  created: { type: Date, default: Date.now }
})

const WeatherModel = mongoose.model('weather', WeatherSchema)

module.exports = WeatherModel
