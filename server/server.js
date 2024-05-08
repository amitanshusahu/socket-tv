const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*" } });
const cors = require("cors");
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});



/// ------ Socket io Handler fun -------


/// ---- Socket Io Connection ------

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on("on", () => {
    io.emit("on");
  })

  socket.on("off", () => {
    io.emit("off");
  })

  socket.on("vp", () => {
    io.emit("vp");
  })

  socket.on("vm", () => {
    io.emit("vm");
  })

  socket.on("play", () => {
    io.emit("play");
  })

  socket.on("pre", () => {
    io.emit("pre");
  })

  socket.on("next", () => {
    io.emit("next");
  })

  socket.on("tp", () => {
    io.emit("tp");
  })

  socket.on("tm", () => {
    io.emit("tm");
  })

  // disconnect 
  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id)
  });

});




/// -------- Server -------------

server.listen(3000, 'localhost', () => {
  console.log('listening on *:3000');
});