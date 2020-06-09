const Storyblok = require('../../lib/storyblok-instance')

module.exports = async () => {
  const env = process.env.ELEVENTY_ENV
  const version = env === 'production' ? 'published' : 'draft'

  try {
    const result = await Storyblok.get('cdn/stories', { version, starts_with: 'events' })
    const events = result.data.stories
    const eventDetail = getEvents(events)
    // console.log(eventDetail[1])

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
      const parsedDescription = Storyblok.richTextResolver.render(event.content.description)
      const sectionTexts = event.content.section_text
      const contactForm = event.content.contact_form
      const mappedSectionTexts = sectionTexts.map(section => {
        const parsedSectionText = Storyblok.richTextResolver.render(section.text)
        return {
          title: section.title,
          text: parsedSectionText
        }
      })
      const mappedContactFormText = contactForm.map(item => {
        const parsedText = Storyblok.richTextResolver.render(item.text)
        return {
          title: item.title,
          text: parsedText
        }
      })
      return {
        ...event.content,
        meta: {
          title: event.content.meta_title,
          description: event.content.meta_description
        },
        full_slug: event.full_slug,
        slug: event.slug,
        description: parsedDescription,
        section_text: mappedSectionTexts,
        contact_form_text: mappedContactFormText
      }
    })
    .reverse()
}
