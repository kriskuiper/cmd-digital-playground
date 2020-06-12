const parseRichText = require('./parse-rich-text')
const mapDescriptionList = require('./map-description-list.js')

module.exports = (assessment_elements) => {
  const mappedAssessment_elements = assessment_elements && assessment_elements.map(item => {
    const parsedText = parseRichText(item.text)
    const descriptionList = mapDescriptionList(item.description_list)

    return {
      title: item.title,
      text: parsedText,
      descriptionList: descriptionList
    }
  })

  return mappedAssessment_elements
}
