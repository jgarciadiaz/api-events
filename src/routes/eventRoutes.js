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
  const promises = events.map(saveEvent)
  Promise.all(promises)
    .then(results => {
      res.send({
        data: results.length
      })
    })
    .catch(error => {
      res.send(error).status(500)
    })
})

module.exports = router
