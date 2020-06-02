const slugify = require('slugify')
const Storyblok = require('../../lib/storyblok-instance')

module.exports = async () => {
  const env = process.env.ELEVENTY_ENV
  const version = env === 'production' ? 'published' : 'draft'

  const result = await Storyblok.get('cdn/stories', { version })
  const { stories = [] } = result.data

  return {
    env,
    previewKey: env !== 'production' && process.env.STORYBLOK_PREVIEW_KEY,
    navigation: getNavigationData(stories),
    stories: getPagesData(stories)
  }
}

function getNavigationData(stories) {
  return stories.reduce((navigation, currentStory) => {
    if (currentStory.full_slug.includes('main-menu')) {
      navigation.mainMenu = currentStory

      return navigation
    }

    return navigation
  }, {})
}

function addComponentSlug(content) {
  return content.map(contentBlock => {
    // Make a slug from the component name, uses slugify.
    // Input: "Test component"
    contentBlock.componentSlug = slugify(contentBlock.component, { lower: true }) // test-component
    return contentBlock
  })
}

function getPagesData(stories) {
  return stories
    .filter(story => {
    return story.full_slug.includes('pages')
    })
    .map(story => ({
      content: addComponentSlug(story.content.content),
      title: story.name,
      slug: story.slug,
      full_slug: story.full_slug
    }))
}
