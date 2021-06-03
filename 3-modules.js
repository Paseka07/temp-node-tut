// Module
//////////////////////////////////////////////
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)s
const names = require('./4-names')     // import names object
const sayHi = require('./5-utils')    //import sayHi function
const data = require('./6-alternative-flavour')

require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
