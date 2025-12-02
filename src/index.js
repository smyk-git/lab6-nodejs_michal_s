const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Hello from Docker + GitHub Actions! test')
})

server.listen(3000)
