const slugify = require('slugify')

module.exports = (content, eventData) => {
  if (!content) {
    return []
  }

  return content.map(contentBlock => {
    return {
      // Return everything contentBlock was before and add the two properties
      // below.
      ...contentBlock,

      // Every component also needs a component slug for the modular-content
      // to figure out which component it has to load.

      // Input: Test component
      // Output: test-component

      // test-component/test-component.html is the template to use.
      componentSlug: slugify(contentBlock.component, { lower: true }),

      // We have to give every component events so we can use that inside the
      // component. This is due to some Eleventy weirdness we do not yet understand.
      events: eventData
    }
  })
}
