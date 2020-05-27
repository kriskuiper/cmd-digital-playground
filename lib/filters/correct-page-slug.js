module.exports = (page) => {
  const env = process.env.ELEVENTY_ENV

  return env === 'production' ? page.slug : page.full_slug
}
