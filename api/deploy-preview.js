const fetch = require('node-fetch')
require('dotenv-safe').config()

const { PREVIEW_DEPLOY_HOOK } = process.env

module.exports = (request, response) => {
  fetch(PREVIEW_DEPLOY_HOOK)
    .then(() => {
      response.status(204)
      response.json({
        state: 'success',
        message: 'Deployed preview'
      })
    })
    .catch(error => {
      const statusCode = error.response.status || 500

      response.status(statusCode)
      response.json({
        state: 'error',
        message: 'Failed to deploy preview',
        error
      })
    })
}
