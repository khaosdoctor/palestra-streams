const Bacon = require('baconjs')

const numeros = Bacon.sequentially(500, [1, 2, 3, 4, 5])
const filtered = numeros.filter(x => x > 2)
filtered.log('Recebido: ')
