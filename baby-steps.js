// const _= require('lodash')

// console.log(_.sum(['node', '/Users/acer/Desktop/Nodejs/baby-steps.js', '1', '2', '3']))
'use strict'

let result = 0

for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)