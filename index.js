var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var nodemailer = require('nodemailer');
// var wellknown = require('nodemailer-wellknown');

// var config = wellknown('Gmail');

var app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use(express.static(__dirname + '/public/'));



app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
});