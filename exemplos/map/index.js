const Bacon = require('baconjs')

const numeros = Bacon.sequentially(500, [1, 2, 3, 4, 5])
const doubles = numeros.map(x => x * 2)
doubles.log('Recebido: ')
