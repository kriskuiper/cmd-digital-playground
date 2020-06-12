const mapSectionText = require('./filters/map-section-text.js')
const mapDescriptionList = require('./filters/map-description-list.js')
const parseRichText = require('./filters/parse-rich-text.js')

module.exports = events => {
  return events
  .map(event => {
    const parsedDescription = parseRichText(event.content.description)
    const sectionTexts = mapSectionText(event.content.section_text)
    const contactForm_text = mapSectionText(event.content.contact_form)
    const assessment_elements_text = mapSectionText(event.content.assessment_elements)
    console.log(assessment_elements_text)

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
      contact_form_text: contactForm_text,
      assessment_elements: assessment_elements_text
    }
  })
    .reverse()
}
