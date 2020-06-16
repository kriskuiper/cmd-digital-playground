const parseRichText = require('./parse-rich-text')
const mapDescriptionListItems = require('./map-description-list-items.js')

module.exports = (description_list) => {
  const mappedDescriptionList = description_list && description_list.map(element => {
    const parsedText = parseRichText(element.text)
    const descriptionList = mapDescriptionListItems(element.description_list)

    return {
      title: element.title,
      text: parsedText,
      description_list: descriptionList
    }
  })

  return mappedDescriptionList
}
