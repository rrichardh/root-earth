var express = require('express');
var http = require('http');

// Creando aplicación
var mapa = express();
var serverh = http.createServer(mapa);
var io = require('socket.io').listen(serverh);

//mapa.use(express.static(__dirname + 'public'));

mapa.set('views', __dirname + '/views');
mapa.set("view engine", "jade");
mapa.use(express.static(__dirname + '/public'));

mapa.get('/', function(req, res) {
	//pasamos parametros a layoutMapa
    res.render('layoutMapa', {
    	title: 'Ubicación en Tiempo Real',
    	description: 'Mi primera Ubicación'
    });
});

io.sockets.on('connection', function(socket){
	socket.on('coords:me', function(data){
		console.log(data);
	});
});

//Iniciamos servidor
serverh.listen(3000);
console.log('Servidor corriendo en LOCALHOST... MAPA');