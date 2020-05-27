console.log('hello from the bundle :)')

import { elements } from './lib/constants'

if ('querySelector' in document) {
  document.body.classList.add('js-enabled')
}

if (elements.UPLOAD_BUTTON) {
  elements.UPLOAD_BUTTON.addEventListener('change', onUploadChange)
}

function onUploadChange(event) {
  const fileNameParts = event.target.value.split('\\')
  const fileName = fileNameParts[fileNameParts.length - 1]
  const label = event.target.nextElementSibling

  if (fileName) {
    label.textContent = fileName
    label.classList.add('is-uploaded')
  } else {
    label.textContent = 'Upload a file'
    label.classList.remove('is-uploaded')
  }
}
