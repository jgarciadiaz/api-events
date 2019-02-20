const EventModel = require('../model/eventModel')

async function saveEvent(event) {
  const query = {uuid: event.uuid}
  const result = await EventModel.findOne(query)
  if (!result) {
    return new EventModel(event).save()
  }
  return null
}

module.exports.saveEvent = saveEvent
