const Bacon = require('baconjs')

const numeros = Bacon.sequentially(500, [1, 2, 3, 4, 5])
numeros.fold(0, (acumulador, val) => acumulador + val).log('Recebido: ')

