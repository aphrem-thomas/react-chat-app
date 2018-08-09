var express=require('express');
var app=express();
var server=require('http').createServer(app);
var io=require('socket.io').listen(server);

const PORT=process.env.PORT||3333;
app.use(express.static("../../public"));
server.listen(PORT,()=>{
    console.log("server listening to "+PORT);
});

