var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessege', function (messege) {
  console.log('newMessege', messege);
  var li = jQuery('<li></li>');
  li.text(`${messege.from}: ${messege.text}`);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessege', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});
