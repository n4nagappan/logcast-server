var shortId = require('shortid');
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port : 3001});

var BASE_URL = "http://107.170.209.244/logcast/";

var wsServer = function(){
}

wsServer.clients = {};
wsServer.findClient = function(castId){
    return wsServer.clients[ castId ]; 
};

var Client = function(ws){
    this.ws = ws;
}

wss.on('connection' , function(ws){
    var client = new Client(ws);
    var id = shortId.generate(); 
    wsServer.clients[ id ] = client;
    ws.send('registered. URL : ' + BASE_URL + id );
//    ws.on('message' , function(message){
//        console.log("Received message : "+message);
//    });
//
});

module.exports = wsServer;
