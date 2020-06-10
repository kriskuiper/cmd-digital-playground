const Storyblok = require('../../src/lib/storyblok-instance.js')

module.exports = (richText) => {
    const parsedText = Storyblok.richTextResolver.render(richText)
    return parsedText
  }
