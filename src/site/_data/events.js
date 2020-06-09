const Storyblok = require('../../lib/storyblok-instance')

module.exports = async () => {
  const env = process.env.ELEVENTY_ENV
  const version = env === 'production' ? 'published' : 'draft'

  try {
    const result = await Storyblok.get('cdn/stories', { version, starts_with: 'events' })
    const events = result.data.stories

    return {
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

function getEvents(events) {
  return events
    .filter(event => {
      return event.full_slug !== 'events/'
    })
    .map(event => {
      const parsedDescription = Storyblok.richTextResolver.render(event.content.description)
      
      return {
        ...event.content,
        meta: {
          title: event.content.meta_title,
          description: event.content.meta_description
        },
        full_slug: event.full_slug,
        slug: event.slug,
        description: parsedDescription

      }
    })
    .reverse()
}
