require('dotenv').config()

module.exports = version => {
  if (version === 'draft') {
    return {
      on: true,
      token: process.env.STORYBLOK_PREVIEW_KEY
    }
  }
}
