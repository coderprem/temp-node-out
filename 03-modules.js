// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./04-names')
console.log(names)
const sayHi = require('./05-uitls')
const data = require('./06-alternative-flavor')
console.log(data)
console.log(data.singlePerson)
require('./07-mind-grenade')

sayHi('Prem')
sayHi(names.ghost)
sayHi(names.zombie)

