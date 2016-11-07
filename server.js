// Server for Loaded Questions website
var path    = require('path'),
    express = require('express'),
    app     = express(),
    http    = require('http').createServer(app);

// Serve index on request
app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//for heroku
var port = process.env.PORT || 3000;

// Listen for http requests
http.listen(port, function(){
  console.log('Visit *:3000 for http requests.');
});