module.exports = (stories) => {
  return stories.reduce((navigation, currentStory) => {
    if (currentStory.full_slug.includes('main-menu')) {
      return {
        ...navigation,
        mainMenu: getMainMenuContents(currentStory)
      }
    }

    return navigation
  }, {})
}

function getMainMenuContents(story) {
  return story.content.navigation_link.map(page => {
    return {
      name: page.name,
      url: correctCachedUrl(page.link.cached_url)
    }
  })
}

// Storyblok does not always give us the correct link because pages are stored
// in the `pages` folder in Storyblok. It also has issues with not being consistent
// in prefixing all links with a / so we have to check and do that manually if needed.
function correctCachedUrl(link) {
  link = link.replace('pages', '')

  return link.includes('/') ? link : `/${link}`
}
