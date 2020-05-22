import preview from './preview'

// Handle Storyblok published and change events by reloading
// the page. You can find the docs here: https://www.storyblok.com/docs/Guides/storyblok-latest-js
if (storyblok) {
  fetch(`/api/get-modular-content?path=${location.pathname}`)
    .then(response => response.json())
    .then(components => {
      preview.render(components)
    })

  storyblok.on(['published', 'change'], async (event) => {
    if (!event.slugChanged) {
      const response = await fetch(`/api/get-modular-content?path=${location.pathname}`)
      const components = await response.json()

      preview.render(components)
    }
  })
}
