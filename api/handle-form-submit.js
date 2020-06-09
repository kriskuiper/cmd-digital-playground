const render = require('../lib/render')

module.exports = async (request, response) => {
  // Since every request to this route is a POST request we have
  // access to request.body where all fields can be found

  if (!request.body.email) {
    const html = await render('error', { message: `You have to insert an email` })

    response.status(500)
    response.send(html)

    return
  }

  const html = await render('success', { message: 'Thanks again!' })

  response.status(200)
  response.send(html)
}
