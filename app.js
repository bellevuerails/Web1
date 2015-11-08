var express = require('express');

var app = express();

var appname = process.env.APPNAME || 'Sam';

app.get ('/', function(req, res){
	res.send('<H1>Test web app : </H1> ' + appname)
})

var server = app.listen(3000, function(){


	console.log('listen to port 3000')
})


