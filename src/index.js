const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Hi from Docker + GitHub Actions!')
})

server.listen(3000)
