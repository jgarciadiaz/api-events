const express = require('express')
const graphqlHTTP = require('express-graphql')

const weatherSchema = require('../graphql/schema/weatherSchema')
const { saveWeatherReport } = require('../services/weatherService')

const router = express.Router()

router.get('/weather', graphqlHTTP(() => ({
  schema: weatherSchema
})))

router.post('/weather', (req, res) => {
  const { weather } = req.body
  saveWeatherReport(weather)
    .then(results => {
      res.send({
        data: results
      })
    })
    .catch(error => {
      res.send(error).status(500)
    })
})

module.exports = router
