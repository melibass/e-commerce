const db = require("../database/models");

function userloggedmiddleware(req,res,next){
    res.locals.islogged = false
    
	if(req.session.userLogged){
		
	


    let emailInCookie = req.cookies.email;
    
    db.User.findOne({
		where: {
			email: emailInCookie
		}
	}).then(userFromCookie =>{
		if (userFromCookie) {
			req.session.userLogged = userFromCookie;
		}
	})
	.catch(noLogged =>{
		console.log(noLogged)
	})

	

	if (req.session.userLogged) {
		
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
		}
	}
	next();
}

module.exports = userloggedmiddleware