const express = require('express');
const router = express.Router();
const controllerUser = require('../controller/ApiUsersController');
const controllerProducts = require('../controller/ApiProductsController');
const controllerFavoritos = require('../controller/ApiControllerFavoritos');
const controllerCompras = require('../controller/ApiControllerCompras');
const adminMiddleware = require("../middleware/adminMidleware")


//Rutas a Api de Usuarios//
router.get('/users', controllerUser.list);
router.get('/users/:id', controllerUser.detail);

//Rutas a Api de Productos//
router.get('/products', controllerProducts.list);
router.get('/products/page/:offset', controllerProducts.productList);
router.get('/products/:id', controllerProducts.detail);

//Rutas a Api Categorias
router.get('/categories', controllerProducts.show);

//Rutas a Api Favoritos
router.get('/favoritos', controllerFavoritos.favoritos);

//Rutas a Api Compras
router.get('/compras', controllerCompras.compras);





module.exports = router;