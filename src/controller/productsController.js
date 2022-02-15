const path=require('path');
const fs = require('fs'); 
const { validationResult, body } = require('express-validator');
const db = require ('../database/models')
const { Sequelize } = require('../database/models');
const { Op } = require('sequelize');
const sequelize = require("sequelize");

let controller = {
    

    inventory:  (req,res)=> {
        db.Product.findAll()
         .then(function(inventory){
             res.render('products/inventory',{inventory})
         })    
     },   

     allproducts: (req,res) => {
        db.Product.findAll()
        .then(function(inventory) {
        res.render('products/all', {inventory})
        })
     },

     favoritos:  (req,res)=> {
        db.User.findOne( 
            {where: { id:res.locals.userLogged.id}, 
            include: [{association:"favorites"}]}) 
        
        .then(function(resultado){//console.log(resultado)
            res.render('favoritos',{resultado:resultado.favorites})
        })
        
     
     },
     favoritosGuardar: (req,res)=>{
        db.Favoritos.create({
            product_id:req.params.id,
            user_id:res.locals.userLogged.id,
            
        })
        res.redirect("/products/favoritos")
     },

    
    mostrarProductos:  (req,res)=> {
        db.Product.findAll()
        .then(function(mostrar){
            res.render('products/inventory',{mostrar})
        })
     },

     decoracion:  (req,res)=> {       
        db.Category.findOne( 
            {where: { id:6}, 
            include: [{association:"products"}]}) 
        .then(function(mostrar){
            res.render('products/products',{mostrar:mostrar.products})
        })
        },

    usopersonal:  (req,res)=> {       
        db.Category.findOne( 
            {where: { id:4}, 
            include: [{association:"products"}]}) 
        .then(function(mostrar){
            res.render('products/products',{mostrar:mostrar.products})
        })
        },

     muebles:  (req,res)=> {       
        db.Category.findOne( 
            {where: { id:1}, 
            include: [{association:"products"}]}) 
        .then(function(mostrar){
            res.render('products/products',{mostrar:mostrar.products})
        })
        },
    
    viajes:  (req,res)=> {       
        db.Category.findOne( 
            {where: { id:3}, 
            include: [{association:"products"}]}) 
        .then(function(mostrar){
            res.render('products/products',{mostrar:mostrar.products})
        })
        },

    detallar: function (req, res) { 
        let colores = db.Color.findAll()
        let mostrarlo = db.Product.findAll()

        let productos = db.Product.findByPk(req.params.id, {
           include: ["colors", "materials", "Country"]
           /*[{association:"colors"},{association:"materials"},{association:"Country"}]*/
        })
        Promise.all([productos,mostrarlo, colores])
         .then(function([product,mostrar, colors]){
           res.render('products/detail', {product: product,mostrar,colors});
           /*res.send(product)*/
         })
    },

    comprar: (req,res) => {
        db.User.findOne( 
            {where: { id:res.locals.userLogged.id}, 
            include: [{all:true}]}) 
        
        .then(function(resultado){
            res.render('cart',{resultado:resultado.cart})
        })

    },

    cartStore: (req,res)=>{
        db.Cart.create({
            product_id:req.params.id,
            user_id:res.locals.userLogged.id,
            
        })
        res.redirect("/products/cart")
     },


    create: (req,res) => {
        let categoria = db.Category.findAll()
        let color =db.Color.findAll()
        let country =db.Country.findAll()
        let material =db.Material.findAll()
        Promise.all([color,categoria,country,material])
            .then(function([color,categoria,country,material]){
               return res.render('products/createproduct',{Colors:color,Categoria:categoria,Country:country,Material:material});
               
            }).catch(error => console.log(error));
    },
    edit: (req,res) => {
        let pedidoproducto = db.Product.findByPk(req.params.id)
        let categoria = db.Category.findAll()
        let color =db.Color.findAll()
        let country =db.Country.findAll()
        let material =db.Material.findAll()
            Promise.all([pedidoproducto,color,categoria,country,material])
                .then(function([product,color,categoria,country,material]){ 
                    res.render('products/editproduct', {product,color,categoria,country,material});
        
        }).catch(error => console.log(error));
    },

    update:(req,res) => {
        // Editamos el producto buscandolo con una condición
        let productoid = req.params.id
        let resultValidation = validationResult(req); 
        
        if (resultValidation.isEmpty() ) {
        db.Product.update({
            name:req.body.name,
            description:req.body.description,
            measure: req.body.measurements,
            price:req.body.price,
            
            country_id:req.body.origin,
            material_id:req.body.material, 
            img:req.file.filename || 'product-by-default.png',
            }, {
                where: {
                    id: productoid
                }
            })
            .then(function(productocreado){
                db.ProductColor.destroy({
                    where: {
                        product_id: req.params.id
                    }
                })
                
                db.ProductCategory.destroy({
                    where: {
                        product_id: req.params.id
                    }
                })
                
                    if (req.body.color.length > 1){
                    req.body.color.forEach(color=>{
                        db.ProductColor.create({
                            color_id:color,
                            product_id:req.params.id
                    }) 
                    })
                } else {
                    db.ProductColor.create({
                        color_id:req.body.color,
                        product_id:req.params.id
                    })
                    }

                    if (req.body.category.length > 1){
                    req.body.category.forEach (category => {
                    db.ProductCategory.create({
                        category_id:category,
                        product_id:req.params.id
                    })
                })
            }  else {
                db.ProductCategory.create({
                    category_id:req.body.category,
                    product_id:req.params.id
                })
                }         
                }).catch(error => console.log(error)); 
            
        res.redirect('/');
    } else {
        let pedidoproducto = db.Product.findByPk(req.params.id, {
            include:{all: true}
        })
        
        let categoria = db.Category.findAll({
            include:{all: true}
        })
        
        let color =db.Color.findAll()
        let country =db.Country.findAll()
        let material =db.Material.findAll()
            Promise.all([pedidoproducto,color,categoria,country,material])
                .then(function([product,color,categoria,country,material]){ 
                    res.render('products/editproduct', {errors: resultValidation.mapped(),
                        oldData: req.body,product,color,categoria,country,material});
        
        }).catch(error => console.log(error));
    }
    },

    store: (req, res) => {
        let resultValidation = validationResult(req);
        if (resultValidation.isEmpty() ) {
            db.Product.create({
                name:req.body.name,
                description:req.body.description,
                measure: req.body.measurements,
                price:req.body.price,
                
                country_id:req.body.origin,
                material_id:req.body.material, 
                img:req.file.filename || 'product-by-default.png',
                })
                .then(function(productocreado){
                    if (req.body.color.length > 1){
                    req.body.color.forEach(color=>{
                        db.ProductColor.create({
                            color_id:color,
                            product_id:productocreado.id
                    }) 
                    })
                } else {
                    db.ProductColor.create({
                        color_id:req.body.color,
                        product_id:productocreado.id
                    })
                    }

                    if (req.body.category.length > 1){
                    req.body.category.forEach (category => {
                    db.ProductCategory.create({
                        category_id:category,
                        product_id:productocreado.id
                    })
                })
            }  else {
                db.ProductCategory.create({
                    category_id:req.body.category,
                    product_id:productocreado.id
                })
                }         
                }).catch(error => console.log(error)); 
                
                
            res.redirect('/');
        }else {
            let categoria = db.Category.findAll()
            let color =db.Color.findAll()
            let country =db.Country.findAll()
            let material =db.Material.findAll()
                Promise.all([color,categoria,country,material])
                    .then(function([color,categoria,country,material]){
			            return res.render('products/createproduct', {
			            	errors: resultValidation.mapped(),
			            	oldData: req.body,
                            Colors:color,
                            Categoria:categoria,
                            Country:country,
                            Material:material
                        })
            }).catch(error => console.log(error));
		
        }
        
    },
    
    delete (req, res) {
        db.Product.findOne( 
            {where: { id:req.params.id}})
            .then(borrarImg => {
                fs.unlinkSync(path.resolve(__dirname,'../../public/img/productos/'+ borrarImg.img))})
        
        
        
        db.ProductColor.destroy({
            where: {
                product_id: req.params.id
            }
        })

        let fav = db.Favoritos.findOne( 
            {where: { product_id:req.params.id}} 
                //.then(borrar => {borrar})
                )
        
        if (fav) {

                db.Favoritos.destroy({
                    where: {
                        product_id: req.params.id
                    }
                })
            }


        let cart = db.Cart.findOne( 
            {where: { product_id:req.params.id}} 
                //.then(borrar => {borrar})
                )
       
        if (cart) {
        db.Cart.destroy({
            where: {
                product_id: req.params.id
            }
        })
    }
        
        db.ProductCategory.destroy({
            where: {
                product_id: req.params.id
            }
        })

        .then(function(borrado) {
           db.Product.destroy({
                where: {
                    id:req.params.id
                }
        })
        
        

        
        })
        .catch(error => console.log(error));    
        res.redirect('/');
    },
    deleteFavorito (req, res) {
        
        db.Favoritos.destroy({
            where: {
                product_id: req.params.id,
                user_id: res.locals.userLogged.id
            }
        })
        
        .catch(error => console.log(error));    
        res.redirect('/products/favoritos');
    },
    deleteCompra (req, res) {
        
        db.Cart.destroy({
            where: {
                product_id: req.params.id,
                user_id: res.locals.userLogged.id
            }
        })
        
        .catch(error => console.log(error));    
        res.redirect('/products/cart');
    },
    busqueda: (req, res) => {
                
        db.Product.findAll({       
            order: [['id', 'ASC']], 
            where: { name : sequelize.where(sequelize.fn('LOWER', sequelize.col('Product.name')), 'LIKE', `%${req.query.search}%`) } 
        })
        .then(function(mostrar){ 
        if (mostrar.length > 0) {
            res.render("busqueda", { mostrar, notfound: false });
        } else {
            res.render("busqueda", {notfound:true })
               }
    }).catch(error => console.log(error));    

}

};
module.exports = controller;