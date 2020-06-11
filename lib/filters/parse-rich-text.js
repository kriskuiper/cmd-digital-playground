const Storyblok = require('../../src/lib/storyblok-instance.js')

module.exports = (richText) => {
    return Storyblok.richTextResolver.render(richText)
  }
