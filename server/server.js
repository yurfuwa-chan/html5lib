/**
 * nodejs test socket
 * User: kaede
 */

var http = require('http'),
io = require('socket.io'), // for npm, otherwise use require('./path/to/socket.io') 

server = http.createServer(function(req, res){
 // your normal server code
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('<h1>Hello world</h1>');
});

server.listen(3000);

console.log("Server running at http://127.0.0.1:3000/");

// socket.io
var socket = io.listen(server);
socket.on('connection', function(client){
    client.send("wellcome new user");
  client.on('message', function(data){
    client.send(data);
    client.broadcast(data);
  });
  client.on('disconnect', function(){
    client.send("goodbye");
  })
});
