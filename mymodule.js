const fs=require ('fs')
const path=require ('path')


module.exports= function (dir, filterstr, callback) {

    fs.readdir(dir, function(err, files){
        if(err)
                { return callback(err) }

             files= files.filter(function(file)
         { return  path.extname(file)=== '.' +filterstr})


    
callback (null,files)



    })
}


