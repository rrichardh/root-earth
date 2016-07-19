var express = require("express");
var bodyParser = require("body-parser");

var server = express();

//middlewares
server.use("/public",express.static('public'));
//parsing = leer los archivos de la peticion
server.use(bodyParser.json()); // para peticiones application/json
server.use(bodyParser.urlencoded({extended: true}));

server.set("view engine", "jade");


server.get('/', function(req, res){
	
	res.render("index");//render a index.jade
});

server.get('/signup', function(req, res){
	res.render('signup');
});

server.get('/login', function(req, res){
	res.render('login');
});

server.post("/users", function(req, res){
	console.log("Usuario: "+req.body.usuario);
	console.log("Contraseña: "+req.body.password);
	res.send("Felicitaciones, Usted esta logeado...")
});

server.listen(3000);
console.log('Servidor corriendo en LOCALHOST...');