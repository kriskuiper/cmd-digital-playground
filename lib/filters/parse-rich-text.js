const Storyblok = require('../../src/lib/storyblok-instance.js')

module.exports = (richText) => {
    return richText && Storyblok.richTextResolver.render(richText)
  }
