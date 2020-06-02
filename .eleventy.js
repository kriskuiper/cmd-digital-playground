const correctInternalUrl = require('./lib/filters/correct-internal-url.js')
const submitText = require('./lib/filters/submit-text')

module.exports = (eleventyConfig) => {
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html')
  eleventyConfig.addPassthroughCopy({'src/assets/fonts': 'fonts'})
  eleventyConfig.addPassthroughCopy({'src/assets/img': 'img'})
  eleventyConfig.addNunjucksFilter('submitText', submitText)

  return {
    dir: {
      input: 'src/site',
      data: '_data',
      includes: '_includes',
      output: '_site'
    },
    templateFormats: ['html', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
