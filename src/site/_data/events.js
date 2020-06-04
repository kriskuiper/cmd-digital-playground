const Storyblok = require('../../lib/storyblok-instance')

module.exports = async () => {
  const env = process.env.ELEVENTY_ENV
  const version = env === 'production' ? 'published' : 'draft'

  try {
    const result = await Storyblok.get('cdn/stories', { version, starts_with: 'events' })
    const events = result.data.stories
    const eventData = getEvents(events)
    const latestEvents = getLatestEvents(eventData)
    console.log(latestEvents)

    return {
      overviewPage: getOverviewPageData(events),
      events: eventData
    }
  } catch(error) {
    if (process.env.ELEVENTY_ENV === 'development') {
      console.error('Error fetching events: ', error)
    }

    return {
      overviewPage: null,
      events: []
    }
  }
}

function getOverviewPageData(events) {
  const overviewPageData = events.find(event => {
    return event.full_slug === 'events/'
  })

  return overviewPageData.content
}

function getEvents(events) {
  return events
    .filter(event => {
      return event.full_slug !== 'events/'
    })
    .map(event => {
      return {
        ...event.content,
        full_slug: event.full_slug
      }
    })
    .reverse()
}

function getLatestEvents(eventData) {
  const sortedEvents = sortEvents (eventData)
  // console.log(sortedEvents)
}

function sortEvents (eventData) {
const allEvents = addDateFormat(eventData)

allEvents.sort(function (a, b) {
  if (a.start_date_format > b.start_date_format) return 1
  if (a.start_date_format < b.start_date_format) return -1
  return 0
})
 return allEvents
}

function addDateFormat (eventData) {
  return eventData
    .map(event => {
      return {
        ...event,
        start_date_format: new Date(event.start_date)
      }
    })
}
