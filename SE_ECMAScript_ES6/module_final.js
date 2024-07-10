/**
 * * Final module contain main function
 */

'use strict'

const { sayHello, response } = require('./module_sub.js')
const func = require('./module_caculator.js')

sayHello()
let result = response("This is data")
console.log(result)

let a = 10
let b = 5

let c = func.sum(a, b)
console.log(c)