
const mymodule= require('./mymodule')
const dir=process.argv[2]
const filterstr=process.argv[3]

mymodule(dir, filterstr, function(err,files){
    if(err){
        return console.error(err)
    }
    files.forEach(function (file) {
        console.log(file)
        
    });

})