const express = require('express')

const eventsRoute = require('./eventRoutes')
const weatherRoute = require('./weatherRoutes')

const router = express.Router()

router.use('/', eventsRoute)
router.use('/', weatherRoute)

module.exports = router
