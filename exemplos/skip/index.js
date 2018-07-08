const Bacon = require('baconjs')

const numeros = Bacon.sequentially(500, [1, 2, 3, 4, 5])
numeros.skip(2).log()

