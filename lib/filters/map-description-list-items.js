const parseRichText = require('./parse-rich-text')

module.exports = (descriptionList) => {
  const mappedDescriptionList = descriptionList && descriptionList.map(item => {
    const parsedDescription = parseRichText(item.description)
    const iconSource = item.icon.filename

    return {
      term: item.term,
      description: parsedDescription,
      icon: iconSource
    }
  })

  return mappedDescriptionList
}
