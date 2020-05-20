const Storyblok = require('../../lib/storyblok-instance')

module.exports = async () => {
  const version = process.env.ELEVENTY_ENV === 'production' ? 'published' : 'draft'

  const result = await Storyblok.get('cdn/stories', { version })
  const { stories = [] } = result && result.data

  return {
    stories: stories.map(story => {
      return {
        content: story.content.content,
        title: story.name,
        full_slug: story.full_slug,
        slug: story.slug
      }
    })
  }
}
