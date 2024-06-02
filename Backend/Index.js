const express =require("express");
const {Server} = require ("socket.io");
var http = require ("http");
const cors = require("cors");

const app =express()

app.use(cors())

var server = http.createServer(app)
const io =new Server(server, {
    cors:{
        origin:"http://localhost:3000",
        methods:["Get", "Post"]
    }
})

io.on("connection", (socket) => {
    // console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    socket.on("JoinRoom", room => socket.join(room))

    socket.on("newMsg", ({newMsg , room}) =>{
        console.log(room, newMsg)
        io.in(room).emit("getLatestmsg", newMsg)
    })
  });

app.get("/", (req,res) =>{
    res.send("Socket Chat be Started")
})

server.listen(8000, () => console.log("App started port no 8000"));