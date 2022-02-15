const db = require ('../database/models')


module.exports = {
        
    favoritos : (req , res) => {
        let contadorIdProducts = []
        let duplicadosIdProducts = {}
        let contadorIdUsers = []
        let duplicadosIdUsers = {}
        
        db.Favoritos.findAll(
            {
                include:{all: true}
            }
            )
        .then(productos => {
            productos.forEach(iduser => {
                contadorIdProducts.push(parseInt(iduser.product_id))
                contadorIdUsers.push(parseInt(iduser.user_id))
                },
            )
            for (let i = 0; i < contadorIdProducts.length; ++i) { 
                if(!duplicadosIdProducts[contadorIdProducts[i]]) 
                duplicadosIdProducts[contadorIdProducts[i]] = 0;
                 ++duplicadosIdProducts[contadorIdProducts[i]]; }

            for (let i = 0; i < contadorIdUsers.length; ++i) { 
                if(!duplicadosIdUsers[contadorIdUsers[i]]) 
                duplicadosIdUsers[contadorIdUsers[i]] = 0;
                 ++duplicadosIdUsers[contadorIdUsers[i]]; }

            Object.values(duplicadosIdProducts).sort(function (a, b) {
                return duplicadosIdProducts[a] > duplicadosIdProducts[b];
            })

            Object.values(duplicadosIdUsers).sort(function (a, b) {
                return duplicadosIdUsers[a] > duplicadosIdUsers[b];
            })
            //let mximoo = maxProduct.reverse()
            //maxUser.reverse()

            let CantProductFav = Object.values(duplicadosIdProducts)   
            let CantUserFav = Object.values(duplicadosIdUsers)        
            

            return res.status(200).json({
                name: "Cantidad de Productos Favoritos",
                ProdUnicos: CantProductFav.length,
                CantUserFavorito: CantUserFav.length,
                status : 200,
            })
        })
    }
}