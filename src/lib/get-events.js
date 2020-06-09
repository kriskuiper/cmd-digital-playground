module.exports = events => {
  return events
    .map(event => {
      return {
        ...event.content,
        meta: {
          title: event.content.meta_title,
          description: event.content.meta_description
        },
        full_slug: event.full_slug,
        slug: event.slug
      }
    })
    .reverse()
}
