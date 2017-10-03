const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const pathPublic = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(pathPublic));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessege', {
    from: 'Raiyan',
    text: 'Ami Raiyan',
    createdAt: 123123
  });

  socket.on('createMessege', (messege) => {
    console.log('createMessege', messege);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
