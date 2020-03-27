const net=require ('net')

function fillZERO(i){

    return ( i<10? '0': '')+i
}

function now(){

const o=new Date()
return o.getFullYear() + '-' +
fillZERO(o.getMonth() +1) + '-' +
fillZERO( o.getDate()) + ' ' +
fillZERO( o.getHours()) + ':' +
fillZERO(o.getMinutes())
}

const server=net.createServer(function(socket){
    socket.end(now() +'\n')
   
})
server.listen(Number(process.argv[2]))