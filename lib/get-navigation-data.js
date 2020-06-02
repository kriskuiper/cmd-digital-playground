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

function correctCachedUrl(link) {
  link = link.replace('pages', '')

  return link.includes('/') ? link : `/${link}`
}
