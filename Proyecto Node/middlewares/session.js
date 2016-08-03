module.exports = function(req, res, next){//solicitud, respuesta, middleware
	if(!req.session.user_id){
		res.redirect("/login");
	}
	else{
		next();
	}
}