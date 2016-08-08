var express = require('express');
//var http = require('http');

// Creando aplicación
var mapa = express();
//var server = http.createServer(mapa);
//mapa.use(express.static(__dirname + 'public'));

mapa.set('views', __dirname + '/views');
mapa.set("view engine", "jade");
mapa.use(express.static(__dirname + '/public'));
/*mapa.configure(function() {
    //app.set('views', __dirname + '/views');
    mapa.set('view engine', 'jade');
    mapa.use(express.static(__dirname + '/public'));
});*/


mapa.get('/', function(req, res) {
	//pasamos parametros a layputMapa
    res.render('layoutMapa', {
    	title: 'Ubicación en Tiempo Real',
    	description: 'Mi primera Ubicación'
    });
});

//Iniciamos servidor
mapa.listen(3000);
console.log('Servidor corriendo en LOCALHOST... MAPA');