const Storyblok = require('../../lib/storyblok-instance')
const getEventsData = require('../../../lib/get-events-data')
const getLatestEvents = require('../../lib/get-latest-events')

module.exports = async () => {
  const env = process.env.ELEVENTY_ENV
  const version = env === 'production' ? 'published' : 'draft'

  try {
    const result = await Storyblok.get('cdn/stories', { version, starts_with: 'events' })
    const events = getEventsData(result.data.stories)
    const latestThree = getLatestEvents(result.data.stories, 3)

    return {
      all: events,
      latestThree
    }
  } catch(error) {
    if (process.env.ELEVENTY_ENV === 'development') {
      console.error('Error fetching events: ', error)
    }

    return {
      all: [],
      latestThree: []
    }
  }
}
