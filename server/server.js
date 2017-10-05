const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessege} = require('./utils/messege');
const pathPublic = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(pathPublic));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessege', generateMessege('Admin','Welcome to the chat app'));

  socket.broadcast.emit('newMessege', generateMessege('Admin', 'New user connected'));

  socket.on('createMessege', (messege, callback) => { // callback is for acknowledgement
    console.log('createMessege', messege);
    io.emit('newMessege', generateMessege(messege.from, messege.text));
    callback('=> This is from the server.');
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
