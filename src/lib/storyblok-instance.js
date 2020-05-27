require('dotenv-safe').config()
const StoryblokClient = require('storyblok-js-client')

const { ELEVENTY_ENV, STORYBLOK_PREVIEW_KEY } = process.env
const STORYBLOK_KEY = STORYBLOK_PREVIEW_KEY

module.exports = new StoryblokClient({
  accessToken: STORYBLOK_KEY,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})
