// Handle Storyblok published and change events by reloading
// the page. You can find the docs here: https://www.storyblok.com/docs/Guides/storyblok-latest-js
if (storyblok) {
  storyblok.on(['published', 'change'], (event) => {
    if (!event.slugChanged) {
      location.reload(true)
    }
  })
}
