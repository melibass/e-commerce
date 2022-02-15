const db = require ('../database/models')


module.exports = {
        
    compras : (req , res) => {
        let contadorIdProducts = []
        let duplicadosIdProducts = {}
        let contadorIdUsers = []
        let duplicadosIdUsers = {}
        
        db.Cart.findAll(
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

            let maxProduct = Object.keys(duplicadosIdProducts).sort(function (a, b) {
                return duplicadosIdProducts[a] < duplicadosIdProducts[b];
            })

            let maxUser = Object.keys(duplicadosIdUsers).sort(function (a, b) {
                return duplicadosIdUsers[a] < duplicadosIdUsers[b];
            })

            let CantProductComprado = Object.values(duplicadosIdProducts)   
            let CantUserCompraron = Object.values(duplicadosIdUsers)        
            

            return res.status(200).json({
                name: "Cantidad de Productos Comprados",
                ProdUnicos: CantProductComprado.length,
                UnidadesCompradas: productos.length,  
                CantUserCompraron: CantUserCompraron.length,
                status : 200,

            })
        })
    }
}