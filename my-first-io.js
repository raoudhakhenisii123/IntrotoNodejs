
const fs= require('fs')

 const str=fs.readFileSync(process.argv[2], 'utf8')

 const nbrelines=str.split('\n').length-1
 console.log(nbrelines)