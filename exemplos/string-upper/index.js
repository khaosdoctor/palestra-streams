const fs = require('fs')
const { Transform } = require('stream')

const upperCaseStream = new Transform({
  readableObjectMode: true,
  transform (chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback()
  }
})

fs.createReadStream('./file.txt')
  .pipe(upperCaseStream)
  .pipe(process.stdout)
