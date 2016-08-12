var express = require("express");

var ruta = express.Router();

/*aplicacion.com/app/*/

ruta.get("/", function(req, res){
	/*Buscar usuario*/
	res.render("app/home");
});

module.exports = ruta;