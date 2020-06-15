import throttle from 'lodash.throttle'
import { apiEndpoints } from './lib/constants'

if (storyblok.isInEditor()) {
  const tenSeconds = 10000
  const throttledDeployProduction = throttle(deployProduction, tenSeconds, { trailing: false })
  const throttledDeployPreview = throttle(deployPreview, tenSeconds, { trailing: false })

  storyblok.on('published', 'unpublished', throttledDeployProduction)
  storyblok.on(['change'], throttledDeployPreview)
}

storyblok.pingEditor(() => {
  if (storyblok.inEditor()) {
    storyblok.enterEditmode()
  }
})

function deployProduction() {
  return fetch(apiEndpoints.DEPLOY_PRODUCTION)
    .then(() => {
      location.reload()
    })
    .catch(error => {
      console.error('Failed to deploy production: ', error)
    })
}

function deployPreview() {
  return fetch('/api/deploy-preview')
    .then(() => {
      location.reload()
    })
    .catch(error => {
      console.error('Failed to deploy preview: ', error)
    })
}
