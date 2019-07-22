const { Map } = require('immutable')

const alpha = Map({ a: 1, b: 2, c: 3, d: 4 })
const upperCase = alpha.map((v, k) => k.toUpperCase()).join()
console.log(upperCase)
// A,B,C,D