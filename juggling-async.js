const http=require('http')
const bl =require('bl')
const Urls=[]
let count=0

function printsurl(){
    for (let i=0; i<3;i++)
    {console.log(Urls[i])}

}

function httpget(index){
    http.get(process.argv[2 + index], function(response){
        response.pipe(bl(function(err, data){
            if(err){
                return console.error(err)
            }
            Urls[index]=data.toString()
            count++ 

            if(count===3)
            {
                printsurl()

            }
        }))
    })
}
for (let i=0; i<3; i++){
    httpget(i)
}