const fs=require('fs')

const file=process.argv[2]

fs.readFile(file, 'utf8', function(error, data){

if(error){
    console.log(error)
}

const nbrelines=file.split('\n').length-1
console.log(nbrelines)


})
