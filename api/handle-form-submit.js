const render = require('../lib/render')
const fetch = require('node-fetch')

module.exports = async (request, response) => {
  if (request.method !== 'POST') {
    // If it's not a post request cancel.
    response.status(500)
    return renderMessage('error', { title: '404 niet gevonden', text: 'Het ziet er naar uit dat deze pagina niet (meer) bestaat.' })
  }

  const { body, query } = request // Helper function build in by Vercel/Now

  // Form validation. TODO: handle this with javascript. Saves a request later down the line.
  if (!body.email) {
    return renderMessage('error', { title: 'Geen Email opgegeven', text: 'Vul een geldig email-adres in op het formulier.' })
  }

  // Send out a post request with the body data to the preferred data handler. e.g: Zapier.
  fetch(query.handler, {
    body,
    method: 'POST'
  })
  .then(() => {
    return renderMessage('success', { title: 'Je bent aangemeld voor het evenement!', text: 'See you soon!' })
  })
  .catch(() => {
    return renderMessage('error', { title: 'Er is iets misgegaan', text: 'Probeer het later nog eens.' })
  })


  async function renderMessage(status, msg) {
    const html = await render('submit', { status, msg })

    if (status === 'success') {
      response.status(200)
    } else {
      response.status(500)
    }

    return response.send(html)
  }
}
