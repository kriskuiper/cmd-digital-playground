const Storyblok = require('../../lib/storyblok-instance')

module.exports = async () => {
  const version = process.env.ELEVENTY_ENV === 'production' ? 'published' : 'draft'

  const result = await Storyblok.get('cdn/stories', { version })
  const { stories = [] } = result && result.data

  return { pages: stories }
}
