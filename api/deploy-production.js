const fetch = require('node-fetch')
require('doten-safe').config()

const { PRODUCTION_DEPLOY_HOOK } = process.env

module.exports = (request, response) => {
  fetch(PRODUCTION_DEPLOY_HOOK)
    .then(() => {
      response.status(204)
      response.json({
        state: 'success',
        message: 'Deployed production'
      })
    })
    .catch(error => {
      const statusCode = error.response.status || 500

      response.status(statusCode)
      response.json({
        state: 'error',
        message: 'Failed to deploy production',
        error
      })
    })
}
