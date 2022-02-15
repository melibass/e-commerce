function guestmiddelware(req,res,next) {
    if (req.session.userLogged) {
        res.redirect("/users/userprofile")
    }
    next();
}
module.exports = guestmiddelware