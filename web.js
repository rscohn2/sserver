var express = require('express');

var app = express.createServer(express.logger());

var samples = [{name: 'app1', dir: 'app1'}];

app.get('/', function(request, response) {
  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});