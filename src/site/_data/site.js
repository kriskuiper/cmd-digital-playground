const Storyblok = require('../../lib/storyblok-instance')

module.exports = async () => {
  const env = process.env.ELEVENTY_ENV
  const version = env === 'production' ? 'published' : 'draft'

  const result = await Storyblok.get('cdn/stories', { version })
  const { stories = [] } = result && result.data

  return {
    env,
    previewKey: env !== 'production' && process.env.STORYBLOK_PREVIEW_KEY,
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
