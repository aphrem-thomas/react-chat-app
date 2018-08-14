var express=require('express');
var app=express();
var server=require('http').createServer(app);
var io=require('socket.io').listen(server);
const ENVIRONMENT=app.get('env');
const PORT=process.env.PORT||3333;
console.log("environment is "+ENVIRONMENT);

if(ENVIRONMENT=='production'){
    console.log("in Production");
    app.use(express.static("../../build"));
}

io.on('connection',(socket)=>{
    console.log("user "+socket.id+" connected");
    socket.on('disconnect',()=>{
        console.log("user diconnected");
    })
    socket.on('chat',(message)=>{
        console.log(message);
    })
})

server.listen(PORT,()=>{
    console.log("server listening to "+PORT);
});

