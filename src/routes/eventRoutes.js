const express = require('express');
const graphqlHTTP = require('express-graphql')

const eventSchema = require('../graphql/schema/eventSchema')
const { saveEvent } = require('../services/eventService')

const router = express.Router()

router.get('/events', graphqlHTTP(() => ({
  schema: eventSchema
})))

router.post('/events', (req, res) => {
  const { events } = req.body
  const promises = events.map(async(event) => {
    try {
      await saveEvent(event)
    } catch(err) {
    }
  })
  Promise.all(promises)
    .then(results => {
      res.send({
        data: results && results.filter(item => item).length || 0
      })
    })
    .catch(error => {
      res.send(error).status(500)
    })
})

module.exports = router
