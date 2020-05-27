const correctPageSlug = require('./lib/filters/correct-page-slug')

module.exports = (eleventyConfig) => {
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html')
  eleventyConfig.addPassthroughCopy({'src/assets/fonts': 'fonts'})

  eleventyConfig.addNunjucksFilter('correctPageSlug', correctPageSlug)

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
