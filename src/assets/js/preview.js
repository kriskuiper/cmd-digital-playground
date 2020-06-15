import throttle from 'lodash.throttle'
import { apiEndpoints } from './lib/constants'

if (storyblok.isInEditor()) {
  const dialogContent = `
    <p class="preview-dialog visually-hidden"></p>
  `

  document.body.insertAdjacentHTML('afterbegin', dialogContent)

  const thirtySeconds = 30000
  const throttledDeployProduction = throttle(deployProduction, thirtySeconds, { trailing: false })
  const throttledDeployPreview = throttle(deployPreview, thirtySeconds, { trailing: false })

  storyblok.on(['published', 'unpublished'], throttledDeployProduction)
  storyblok.on('change', throttledDeployPreview)
}

storyblok.pingEditor(() => {
  if (storyblok.isInEditor()) {
    storyblok.enterEditmode()
  }
})

function deployProduction() {
  showDialog('De pagina is succesvol gepubliceerd of ongepubliceerd. Het duurt even voordat de wijzigingen live staan.')

  return fetch(apiEndpoints.DEPLOY_PRODUCTION)
    .then(() => {
      setTimeout(() => {
        location.reload()
      }, 30000)
    })
    .catch(error => {
      console.error('Failed to deploy production: ', error)
    })
}

function deployPreview() {
  showDialog('Je wijzigingen worden verwerkt... Het duurt 30 seconden voordat de pagina wordt ververst.')

  return fetch('/api/deploy-preview')
    .then(() => {
      setTimeout(() => {
        location.reload()
      }, 30000)
    })
    .catch(error => {
      console.error('Failed to deploy preview: ', error)
    })
}

function showDialog(text) {
  const dialogElement = document.getElementsByClassName('preview-dialog')[0]

  dialogElement.classList.remove('visually-hidden')
  dialogElement.textContent = text
}
