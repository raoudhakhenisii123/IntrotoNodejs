const fs=require('fs')
const path=require('path')

const directory= process.argv[2]
const ext= '.' + process.argv[3]


fs.readdir(directory, 'utf-8', function(error, files){
    if(error){
        console.log(error)
    }
    files.forEach(function(file){
   if (path.extname(file)===ext)
   console.log(file)
    });

    
})

