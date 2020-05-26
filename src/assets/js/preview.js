import preview from './preview-environment'

/*
  Handle live updates by hijacking the page with JS... bit nasty now but it works.
  We have to find a solid solution for this though.

  You can find the docs here: https://www.storyblok.com/docs/Guides/storyblok-latest-js
 */
if (storyblok.isInEditor()) {
  renderLatestPreview()

  storyblok.on(['published', 'change'], async (event) => {
    if (!event.slugChanged) {
      renderLatestPreview()
    }
  })
}

async function renderLatestPreview() {
  const content = await getStoryblokPageContent()

  preview.render(content)
}

function getStoryblokPageContent() {
  return new Promise((resolve, reject) => {
    storyblok.get(
      {
        slug: location.pathname,
        version: 'draft'
      },
      ({ story }) => {
        resolve(story.content.content)
      },
      (error) => {
        reject(error)
      }
    )
  })
}
