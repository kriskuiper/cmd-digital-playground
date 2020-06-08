const slugify = require("slugify")

module.exports = (content, eventData) => {
  return content.map(contentBlock => {
    // Make a slug from the component name, uses slugify.
    // Input: "Test component"
    contentBlock.componentSlug = slugify(contentBlock.component, { lower: true }) // test-component

    // Check if the component needs to fetch events.
    if (contentBlock.componentSlug === 'events') {
      // Add eventdata
      contentBlock.events = eventData
    }

    return contentBlock
  })
}
