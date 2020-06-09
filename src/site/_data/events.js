const Storyblok = require('../../lib/storyblok-instance')

module.exports = async () => {
  const env = process.env.ELEVENTY_ENV
  const version = env === 'production' ? 'published' : 'draft'

  try {
    const result = await Storyblok.get('cdn/stories', { version, starts_with: 'events' })
    const events = result.data.stories
    const eventDetail = getEvents(events)

    return {
      events: eventDetail
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
      const parsedDescription = parseRichText(event.content.description)
      const sectionTexts = mapSectionText(event.content.section_text)
      const contactForm_text = mapSectionText(event.content.contact_form)

      return {
        ...event.content,
        meta: {
          title: event.content.meta_title,
          description: event.content.meta_description
        },
        full_slug: event.full_slug,
        slug: event.slug,
        description: parsedDescription,
        section_text: sectionTexts,
        contact_form_text: contactForm_text
      }
    })
    .reverse()
}

function mapSectionText(sectionTexts) {
  const mappedSectionTexts = sectionTexts.map(section => {
    const parsedText = parseRichText(section.text)
    return {
      title: section.title,
      text: parsedText
    }
  })
  return mappedSectionTexts
}

function parseRichText(richText) {
  const parsedText = Storyblok.richTextResolver.render(richText)
  return parsedText
}
