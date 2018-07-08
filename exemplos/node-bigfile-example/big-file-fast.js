const fs = require('fs')
const server = require('http').createServer()

server.on('request', (request, resposta) => {
  fs.createReadStream(`./bigfile.txt`).pipe(resposta)
})

server.listen(5656)
