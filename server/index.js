var app = require('./app');


let WebSocket = require('ws');
let wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws)=>{
    ws.on('message', (message) =>{
        console.log(`Received ${message}`);
        wss.clients.forEach((client) => {
            client.send(message);
        });
    })
})

app.listen(3000, function (error){
  if(error) console.log('error:', error);
  console.log('Listening to port: 3000');
})