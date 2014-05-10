var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var api = require('./api.js');

app.use(bodyParser());

app.get('/', api.get);
app.get('/mammals', api.get);
app.get('/mammals/:type', api.type);



app.post('/', api.create);

app.listen(8888, function() {
	console.log('searching for extinct mammals');
});