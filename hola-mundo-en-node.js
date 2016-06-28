var express = require('express'); // require=import
var aplicacion = express();

aplicacion.get('/', function(req, res){
	/*setTimeout(function(){
		res.send('Hello World...');
	}, 2000);*///demora en cargar 2 segundos
	res.send('Hello World... desde Node.Js');
});

aplicacion.listen(3000);
console.log('Servidor corriendo en LOCALHOST...');
