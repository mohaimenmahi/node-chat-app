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
    from: 'Admin',
    text: 'Welcome to the chat app'
  });

  socket.broadcast.emit('newMessege', {
    from: 'Admin',
    text: 'New User joined'
  });

  socket.on('createMessege', (messege) => {
    console.log('createMessege', messege);
    io.emit('newMessege', {
      from: messege.from,
      text: messege.text,
      createdAt: new Date().getTime()
    });
    // socket.broadcast.emit('newMessege', {
    //   from: messege.from,
    //   text: messege.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
