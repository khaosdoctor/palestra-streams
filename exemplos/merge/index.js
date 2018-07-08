const Bacon = require('baconjs')
const arrLetras = Array.from(Array(67).keys()).map(x => x + 60).map(y => String.fromCharCode(y))

const numeros = Bacon.sequentially(500, Array.from(Array(50).keys()))
const letras = Bacon.sequentially(250, arrLetras)

numeros.merge(letras).log()

