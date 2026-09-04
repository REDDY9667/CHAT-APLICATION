const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const {Server} = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;


//Socket.io connection
io.on('connection', (socket) => {
  socket.on('user-message', (message) => {
    io.emit('message', message);
  });
});


app.use(express.static(path.resolve('./public')));


app.get('/', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
