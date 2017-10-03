var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessege', {
    from: 'mahi106@facebook.com',
    text: 'how are you?'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessege', function (messege) {
  console.log('newMessege', messege);
});
