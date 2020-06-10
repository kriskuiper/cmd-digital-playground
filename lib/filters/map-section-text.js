const parseRichText = require('./parse-rich-text')

module.exports = (sectionTexts) => {
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
}
