var mongoose = require("mongoose");
var Esquema = mongoose.Schema;

mongoose.connect("mongodb://localhost/sistema_inteligente_bd");

var valores_sex = ["M", "F"];
var email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Coloca un Email valido"];

var validar_password = {
	validator:function(pass){
		return this.password_confirmation == pass;
	},
	message: "Las contraseñas no son iguales"
};

var usuario_esquema = new Esquema({
	nombre: {type:String, required: "ElNombre es Obligatorio"},
	apellido: {type:String, required: true},
	dni: {type:String, required: true, maxlength:[8, "DNI incorrecto"]},
	fecha_naci: Date,
	direccion: {type:String, required: true},
	sex: {type:String, enum:{values: valores_sex, message:"Opcion no valida"}},
	cel: String,
	email: {type:String, required: "El correo es obligatorio", match: email_match},
	usuario: String,
	password: {
		type:String,
		minlength:[8,"El password es muy corto"],
		validate: validar_password
	}
});

// virtual para confirmar password
usuario_esquema.virtual("password_confirmacion").get(function(){
	return this.password_confir;
}).set(function(password){
	this.password_confir = password;
});

var Usuario = mongoose.model("Usuario", usuario_esquema);

module.exports.Usuario = Usuario;