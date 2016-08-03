var Usuario = require("../models/usuario").Usuario;

module.exports = function(req, res, next){//solicitud, respuesta, middleware
	if(!req.session.user_id){
		res.redirect("/login");
	}
	else{
		Usuario.findById(req.session.user_id, function(err, user){
			if(err){
				console.log("ERRORRRRRRR"+err);
				res.redirect("/login");
			}
			else{
				res.locals = {usuario: user};
				next();
			}
		});
		//next();
	}
}