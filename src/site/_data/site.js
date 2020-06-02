const getPagesData = require('../../../lib/get-pages-data')
const getNavigationData = require('../../../lib/get-navigation-data')
const Storyblok = require('../../lib/storyblok-instance')

module.exports = async () => {
  const env = 'development'
  const version = 'draft'

  const result = await Storyblok.get('cdn/stories', { version })
  const { stories = [] } = result.data

  return {
    env,
    previewKey: process.env.STORYBLOK_PREVIEW_KEY,
    navigation: getNavigationData(stories),
    stories: getPagesData(stories)
  }
}
