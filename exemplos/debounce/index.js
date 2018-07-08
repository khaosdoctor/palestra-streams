const Bacon = require('baconjs')

const clicks = Bacon.sequentially(50, Array.from(Array(50).fill('Click!')))
clicks.debounceImmediate(300).log()

