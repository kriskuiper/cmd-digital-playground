const slugify = require('slugify')

module.exports = (content, eventData) => {
  if (!content) {
    return []
  }

  return content.map(contentBlock => {
    // Make a slug from the component name, uses slugify.
    // Input: "Test component"
    contentBlock.componentSlug = slugify(contentBlock.component, { lower: true }) // test-component
    contentBlock.events = eventData

    return contentBlock
  })
}
