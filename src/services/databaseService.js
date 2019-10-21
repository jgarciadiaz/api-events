const mongoose = require('mongoose')

mongoose.Promise = global.Promise

function openDatabase(dbUrl) {
  return mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports.openDatabase = openDatabase
