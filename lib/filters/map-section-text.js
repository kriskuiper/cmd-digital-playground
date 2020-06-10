const Storyblok = require('../src/lib/storyblok-instance.js')

function mapSectionText(sectionTexts) {
  const mappedSectionTexts = sectionTexts.map(section => {
    const parsedText = parseRichText(section.text)
    return {
      title: section.title,
      text: parsedText
    }
  })
  return mappedSectionTexts
}

function parseRichText(richText) {
  const parsedText = Storyblok.richTextResolver.render(richText)
  return parsedText
}
