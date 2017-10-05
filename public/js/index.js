var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessege', function (messege) {
  console.log('newMessege', messege);
});

socket.emit('createMessege', {
  from: 'Erik',
  text: 'Hi'
}, function (data) {
  console.log('Got it!',data);
});
