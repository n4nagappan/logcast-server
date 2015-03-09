var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
var wsServer = require('./wsServer.js');

server.listen(3003);

io.on('connection', function (socket) {
  socket.emit('setup', { data : 'Some random message' });
  socket.on('setup', function (message) {
    var tokens = message[ 'url' ].split('/');
    var castId = tokens[ tokens.length -1 ];
    var client = wsServer.findClient(castId);
    if( typeof client !== "undefined"){
        client.ws.on('message', function(message){
            console.log("Received message from client " + message);
            socket.emit('notification', { data : message } );
        });
    }
  });
});

function castIO(){
}

castIO.findClient = function(castId){
    return wsServer.findClient(castId); 
};

module.exports = castIO;
