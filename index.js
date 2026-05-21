const express = require('express');
const http = require('http');
const app = express();
const {Server} = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;


//Socket.io connection
io.on('connection', (socket) => {
  // console.log('A user connected');
  socket.on('') 
});


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile('/public/index.html');
});

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
