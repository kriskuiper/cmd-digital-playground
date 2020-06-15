const render = require('../lib/render')
const axios = require('axios')

module.exports = async (request, response) => {
  // Since every request to this route is a POST request we have
  // access to request.body where all fields can be found
  const { body, query } = request // Helper function build in by Vercel/Now

  // Is it a POST request or a GET? Currently only supports POST requests.
  if (request.method === 'POST') {
      if (!body.email) {
        const html = await render('error', { message: `You have to insert an email` })

        response.status(500)
        response.send(html)

        return
      }

      // Validation successful, do this:
      const POST_REQUEST = await axios.post(query.handler, { data: body })

      if (POST_REQUEST.status === 200 && data.status === 'success') {
        const html = await render('success', { message: `Aanmelding succesvol!` })

        response.status(200)
        response.send(html)
      }
  } else {
    const html = await render('error', { message: `This should be a 404 page` })

    response.status(500)
    response.send(html)
  }
}
