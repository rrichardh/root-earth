var express = require("express");

var server = express();

server.get('/', function(req, res){
	
	res.send("Bienvenidos, esta es la página de inicio...");//manda la respuesta y cierra la conexion - res.end
});

server.listen(3000);
console.log('Servidor corriendo en LOCALHOST...');