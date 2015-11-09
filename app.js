var express = require('express');

var app = express();

var router = express.Router();
var path = __dirname + '/views/';

var appname = process.env.APPNAME || 'Sam';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});


// app.get ('/', function(req, res){
// 	res.send('<H1>Test web app : </H1> ' + appname)
// })

var server = app.listen(3000, function(){


	console.log('listen to port 3000')
})


