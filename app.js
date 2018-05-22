var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World from server.js');
// });
//app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/public'))
app.use('/lib', express.static(__dirname + '/node_modules'));
    
app.listen(3000);
console.log('Server running on the port 3000');