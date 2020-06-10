const POSSIBLE_LINKS = {
  linkedin: true,
  facebook: true,
  vimeo: true,
  twitter: true
}

module.exports = (stories) => {
  const footer = stories.find(story => story.name === 'Footer')
  const links = Object.entries(footer.content)
    .filter(([key]) => {
      key = key.replace('_link', '')

      return POSSIBLE_LINKS[key]
    })
    .map(([key, value]) => {
      const name = key.replace('_link', '')

      return {
        name: correctCasing(name),
        url: value
      }
    })

  return { links }
}

function correctCasing(string) {
  const correctedString = `${string.charAt(0).toUpperCase()}${string.slice(1, string.length)}`

  return correctedString
}
