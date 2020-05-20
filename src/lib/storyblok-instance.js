require('dotenv-safe').config()
const StoryblokClient = require('storyblok-js-client')

const { ELEVENTY_ENV, STORYBLOK_PREVIEW_KEY, STORYBLOK_PUBLIC_KEY } = process.env
const production = ELEVENTY_ENV === 'production'
const STORYBLOK_KEY = production ? STORYBLOK_PUBLIC_KEY : STORYBLOK_PREVIEW_KEY

module.exports = new StoryblokClient({
  accessToken: STORYBLOK_KEY,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})
