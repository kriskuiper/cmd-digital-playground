const fs = require('fs')

// Also be able to use the 404 page in development:
// https://www.11ty.dev/docs/quicktips/not-found/
module.exports = {
  callbacks: {
    ready: function(error, browserSync) {
      if (error) {
        console.log(error)
      }

      browserSync.addMiddleware("*", (req, res) => {
        const content_404 = fs.readFileSync('_site/404.html')
        // Provides the 404 content without redirect.
        res.write(content_404)
        // Add 404 http status code in request header.
        // res.writeHead(404, { "Content-Type": "text/html" });
        res.writeHead(404)
        res.end()
      })
    }
  }
}
