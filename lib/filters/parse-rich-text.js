const Storyblok = require('../../src/lib/storyblok-instance.js')

module.exports = (richText) => {
  function parseRichText(richText) {
    const parsedText = Storyblok.richTextResolver.render(richText)
    return parsedText
  }
}
