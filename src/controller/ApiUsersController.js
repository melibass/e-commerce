const db = require ('../database/models')
const path = require ('path');


module.exports = {
    list : (req, res) => {
        db.User.findAll()
        .then(usuarios => {
        let detail = []
            usuarios.forEach(usuario => {
                detail.push({
                id : usuario.id,
                name : usuario.first_name + " " + usuario.last_name,
                email : usuario.email,
                imagen : "http://localhost:3001/img/avatars/" + usuario.avatar,
                detail : "http://localhost:3001/api/users/" + usuario.id,
                })
            })

            return res.status(200).json({
                name: "Cantidad de Usuarios",
                count :  usuarios.length,
                users : detail,
                icon : "fas fa-users",
                status : 200  
            })
        })
        
    },
    detail : (req , res) => {
        db.User.findByPk(req.params.id)
        .then(usuario => {
            return res.status(200).json({
                Name : usuario.first_name,
                Apellido : usuario.last_name,
                Email : usuario.email,
                Nac : usuario.dob,
                imagen : "http://localhost:3001/img/avatars/" + usuario.avatar,
                status : 200  
            })
        })
    },

}