const Storyblok = require('../../lib/storyblok-instance')

module.exports = async () => {
  const env = process.env.ELEVENTY_ENV
  const version = env === 'production' ? 'published' : 'draft'

  try {
    const result = await Storyblok.get('cdn/stories', { version, starts_with: 'events' })
    const events = result.data.stories

    return {
      overviewPage: getOverviewPageData(events),
      events: getEvents(events)
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
