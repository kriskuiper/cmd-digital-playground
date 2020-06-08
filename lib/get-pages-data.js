const addComponentSlug = require('./add-component-slug')

module.exports = (stories) => {
  return stories
    .filter(story => {
      return story.full_slug.includes('pages')
    })
    .map(story => ({
      content: addComponentSlug(story.content.content),
      title: story.name,
      slug: correctHomepageSlug(story.slug),
      full_slug: story.full_slug
    }))
}

function correctHomepageSlug(slug) {
  return slug.includes('home') ? '' : slug
}
