const render = require('../lib/render')
const axios = require('axios')

module.exports = async (request, response) => {
  async function renderMessage(status, msg) {
    const html = await render('submit', { status, msg })

    if (status === 'success') {
      response.status(200)
    } else {
      response.status(500)
    }

    return response.send(html)
  }
  // Since every request to this route is a POST request we have
  // access to request.body where all fields can be found
  const { body, query } = request // Helper function build in by Vercel/Now

  // Is it a POST request or a GET? Currently only supports POST requests.
  if (request.method === 'POST') {
      if (!body.email) {
        renderMessage('error', { title: 'Geen Email opgegeven', text: 'Vul een geldig email-adres in op het formulier.' })
      }

      // Validation successful, do this:
      const POST_REQUEST = await axios.post(query.handler, { data: body })

      if (POST_REQUEST.status === 200 && POST_REQUEST.data.status === 'success') {
        renderMessage('succes', { title: 'Je bent aangemeld voor het evenement!', text: 'See you soon!' })
      }
  } else {
    renderMessage('error', { title: '404 niet gevonden', text: 'Het ziet er naar uit dat deze pagina niet (meer) bestaat.' })
  }
}
