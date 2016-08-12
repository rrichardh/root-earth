var express = require("express");

var ruta = express.Router();

/*aplicacion.com/app/*/

ruta.get("/", function(req, res){
	/*Buscar usuario*/
	//res.render("app/home");
	res.render('app/layoutMapa', {
    	title: 'Ubicación en Tiempo Real',
    	description: 'Mi primera Ubicación'
    });
});

module.exports = ruta;