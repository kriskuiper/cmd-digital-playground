const getPagesData = require('../../../lib/get-pages-data')
const getNavigationData = require('../../../lib/get-navigation-data')
const Storyblok = require('../../lib/storyblok-instance')

const events = require('./events')

module.exports = async () => {
  const env = process.env.ELEVENTY_ENV
  const version = env === 'production' ? 'published' : 'draft'

  const result = await Storyblok.get('cdn/stories', { version })
  const { stories = [] } = result.data
  const eventData = await events() // Because of the way eleventy works, I fetch the event data once more to pass on to components that have events. Because this is the only place where you can async request events.

  return {
    navigation: getNavigationData(stories),
    stories: getPagesData(stories, eventData)
  }
}
