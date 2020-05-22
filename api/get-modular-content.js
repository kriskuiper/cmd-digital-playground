const StoryblokClient = require('storyblok-js-client')
const StoryblokInstance = new StoryblokClient({
  accessToken: process.env.STORYBLOK_PREVIEW_KEY,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})

module.exports = async (req, res) => {
  try {
    const { data } = await StoryblokInstance.get(`cdn/stories/${req.query.path}`, {
      version: 'draft'
    })
    const { story } = data
    const content = getContent(story)

    res.status(200).json(content)
  } catch(error) {
    res.status(500).json({
      error
    })
  }
}

function getContent(story) {
  return story && story.content && story.content.content
}
