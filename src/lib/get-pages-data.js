const formatComponentData = require('./format-component-data')

module.exports = (stories, eventData) => {
  return stories
    .filter(story => {
      return story.full_slug.includes('pages')
    })
    .map(story => ({
      content: formatComponentData(story.content.content, eventData), // Add a component slug name to the object & add event data to all event overview components.
      title: story.name,
      slug: correctHomepageSlug(story.slug),
      full_slug: story.full_slug,
      meta: {
        title: story.content.meta_title,
        description: story.content.meta_description
      }
    }))
}

function correctHomepageSlug(slug) {
  return slug.includes('home') ? '' : slug
}
