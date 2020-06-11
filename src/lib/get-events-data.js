const mapSectionText = require('../../lib/filters/map-section-text')
const parseRichText = require('../../lib/filters/parse-rich-text')

module.exports = events => {
  return events
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
