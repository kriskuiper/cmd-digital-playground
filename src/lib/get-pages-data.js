const formatComponentData = require('./format-component-data')

module.exports = (stories, eventData) => {
  return stories
    .filter(story => {
      return story.full_slug.includes('pages')
    })
    .map(story => ({
      // We have to add a component slug and event data to the content
      // of a component to make everything work later.
      content: formatComponentData(story.content.content, eventData),
      title: story.name,

      // If the slug includes 'home' we have to correct it back to an empty
      // string so the homepage gets build to /index.html instead of /home/index.html
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
