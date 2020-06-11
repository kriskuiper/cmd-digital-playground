const getPagesData = require('../../../lib/get-pages-data')
const getNavigationData = require('../../../lib/get-navigation-data')
const Storyblok = require('../../lib/storyblok-instance')
const getEventsData = require('../../../lib/get-events-data')
const getFooterData = require('../../lib/get-footer-data')
const getPreviewData = require('../../../lib/get-preview-data')

module.exports = async () => {
  const version = 'draft'

  const [pages, events] = await Promise.all([
    Storyblok.get('cdn/stories', { version }),
    Storyblok.get('cdn/stories', { starts_with: 'events', version })
  ])

  const { stories = [] } = pages.data

  return {
    navigation: getNavigationData(stories),
    footer: getFooterData(stories),
    stories: getPagesData(stories, getEventsData(events.data.stories)),
    preview: process.env.ELEVENTY_ENV === 'development' ? getPreviewData(version) : null
  }
}
