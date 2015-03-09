var socket = io.connect('http://107.170.209.244:3003');
socket.on('setup', function (data) {
    console.log(data);
    socket.emit('setup', { url: document.URL });
});

socket.on('notification', function (message) {
    $("#streamBox").append(message[ 'data' ] + "<br>");
    window.scrollTo(0,document.body.scrollHeight);
});
