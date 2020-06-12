const parseRichText = require('./parse-rich-text')

module.exports = (descriptionList) => {
  const mappedDescriptionListItems = descriptionList && descriptionList.map(item => {
    const parsedDescription = parseRichText(item.description)
    const iconSource = item.icon.filename
    // console.log(iconSource)
    // console.log(item)
    return {
      term: item.term,
      parsedDescription: parsedDescription,
      icon: iconSource
    }
  })

  return mappedDescriptionListItems
}
