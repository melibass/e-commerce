function authmiddelware(req,res,next) {
    if (!req.session.userLogged) { // si el user no esta logueaado, te permite ver el login
        res.redirect("/users/login")
    }
    next();
}
module.exports = authmiddelware