const getPagesData = require('../../../lib/get-pages-data')
const getNavigationData = require('../../../lib/get-navigation-data')
const Storyblok = require('../../lib/storyblok-instance')
const getEvents = require('../../../lib/get-events')

module.exports = async () => {
  const version = 'draft'

  const [pages, events] = await Promise.all([
    Storyblok.get('cdn/stories', { version }),
    Storyblok.get('cdn/stories', { starts_with: 'events', version })
  ])

  const { stories = [] } = pages.data

  return {
    navigation: getNavigationData(stories),
    stories: getPagesData(stories, getEvents(events.data.stories))
  }
}
