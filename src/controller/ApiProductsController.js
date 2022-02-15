const db = require ('../database/models')


module.exports = {
    list : (req, res) => {
        
        
        let categoria = db.Category.findAll({include: {all: true}})
        let productos = db.Product.findAll(
            {
            include:{all: true},
            }
        )
        console.log(req.params.offset)
        Promise.all([productos,categoria])
        .then(function([productos,categoria]){
            let detail = []
            let countbyCategory = []
            productos.forEach(producto => {
                detail.push({
                id : producto.id,
                name : producto.name,
                descripcion : producto.description,
                color: producto.colors,
                origen:producto.Country,
                categoria: producto.categories,
                img : "http://localhost:3001/img/productos/" + producto.img, 
                detail : "http://localhost:3001/products/" + producto.id,
                
                })
            })

            categoria.forEach(categoria => {
                countbyCategory.push({
                Nombre: categoria.category,
                Cantidad: categoria.products.length,
                }) 
            })

            return res.status(200).json({
               name: "Cantidad de productos",
                count :  productos.length,
                CountByCategory : countbyCategory,
                products : detail,
                icon : "fas fa-gift",
                status : 200  
            })
        })
        
    },
    show: (req,res) => {
        let categorias = db.Category.findAll({include: {all: true}})
        
        Promise.all([categorias])
        .then(function([categorias]){
            let detail = []
            categorias.forEach(categoria => {
                detail.push({
                id : categoria.id,
                category : categoria.category,
                })
            })


            return res.status(200).json({
                name: "Cantidad de Categorias",
                count :  categorias.length,
                category: categorias.category,
                categorias: detail,
                icon : "fas fa-sitemap",
                status : 200  
            })
        })
        

    },
    detail : (req , res) => {
        db.Product.findByPk(req.params.id,{include:{all: true}})
        .then(producto => {
            let colores = []
            let categorias = []
            producto.colors.forEach(color => {
                colores.push(color.color)
            })
            producto.categories.forEach(categoria => {
                categorias.push(categoria.category)
            })


            return res.status(200).json({
                Nombre : producto.name,
                Descripcion : producto.description,
                Medidas : producto.measure,
                Material : producto.materials.material,
                Origen : producto.Country.country,
                Color : colores,
                Categoria : categorias,
                Imagen : "http://localhost:3001/img/productos/" + producto.img,
                status : 200  
            })
        })
    },
    productList : (req , res) => {
        db.Product.findAll(
            {
            include:{all: true},
            limit: 5,
            offset : parseInt(req.params.offset)*5,
            }
        )
        .then(productos => {
            return res.status(200).json({
                products : productos,
                status : 200  
            })
        })
    },



}