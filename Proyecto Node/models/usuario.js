var mongoose = require("mongoose");
var Esquema = mongoose.Schema;

mongoose.connect("mongodb://localhost/sistema_inteligente_bd");

var usuario_esquema = new Esquema({
	nombre: String,
	apellido: String,
	dni: String,
	fecha_naci: Date,
	direccion: String,
	cel: String,
	usuario: String,
	password: String,
	email: String
});

var Usuario = mongoose.model("Usuario", usuario_esquema);

module.exports.Usuario = Usuario;