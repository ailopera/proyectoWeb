var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views','./views');

app.use(express.static('./public'));

app.get('/', function(req, res){
	res.render('index');
});

app.post('/', function(req, res){
	res.render('upload');
});

http.createServer(app).listen(3000, function(){
	console.log('App started');
})