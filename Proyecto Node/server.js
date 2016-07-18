var express = require("express");
var bodyParser = require("body-parser");

var server = express();

server.set("view engine", "jade");

server.get('/', function(req, res){
	
	res.render("index");//render a index.jade
});

server.listen(3000);
console.log('Servidor corriendo en LOCALHOST...');