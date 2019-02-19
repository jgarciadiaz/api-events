const EventModel = require('../model/eventModel')

function saveEvent(event) {
  return new EventModel(event).save()
}

module.exports.saveEvent = saveEvent
