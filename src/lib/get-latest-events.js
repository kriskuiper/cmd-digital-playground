const dayjs = require('dayjs')

module.exports = (eventData, amount) => {
  const sortedEvents = filterAndSortEvents(eventData)
  const latestEvents = sortedEvents.slice(0, amount)

  return latestEvents
}

function filterAndSortEvents(eventData) {
  const allEvents = addDateFormat(eventData)
  const filteredEvents = allEvents.filter(isNotBeforeToday)

  filteredEvents.sort((currentEvent, nextEvent) => {
    const currentStartDate = currentEvent.start_date_format
    const nextStartDate = nextEvent.start_date_format

    if (currentStartDate.isBefore(nextStartDate)) {
      return -1
    }

    if (currentStartDate.isAfter(nextStartDate)) {
      return 1
    }

    return 0
  })

  return filteredEvents
}

function addDateFormat(eventData) {
  return eventData
    .map(event => {
      return {
        ...event,
        start_date_format: dayjs(event.content.start_date)
      }
    })
}

function isNotBeforeToday(event) {
  const startDate = event.start_date_format
  const today = dayjs()

  return startDate.isValid() && !startDate.isBefore(today)
}
