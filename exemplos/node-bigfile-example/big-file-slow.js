const fs = require('fs')
const server = require('http').createServer()

server.on('request', (request, response) => {
  fs.readFile(`./bigfile.txt`, (err, dados) => {
    if (err) throw err
    response.end(dados)
  })
})

server.listen(5656)
