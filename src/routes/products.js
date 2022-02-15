const express = require('express');
const router = express.Router();
const path=require('path');
const controller = require('../controller/productsController')
const multer = require('multer');
const validation=require ('../middleware/validatorProductsMiddleware');
const validationUpate=require ('../middleware/validatorProductsUpdateMiddleware');
const adminMiddelware = require("../middleware/adminMidleware")
const authmiddelware = require("../middleware/authmiddleware");

/* Configuracion de multer */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img/productos'));
    },
    filename: function (req, file, cb) {
        const name = `product-${Date.now()}${path.extname(file.originalname)}`
        cb(null, name)
    }
})
const upload = multer({ storage })

/* proceso datos */
router.post('/favoritos/:id',authmiddelware,controller.favoritosGuardar);
router.post('/', upload.single('image'),validation, controller.store); //Ruta que crea y guarda
router.put("/editproduct/:id",upload.single('image'),validationUpate,adminMiddelware, controller.update); //Edita productos?
router.delete("/:id",adminMiddelware, controller.delete); // Ruta que elimina el producto
router.delete("/favoritos/:id",adminMiddelware, controller.deleteFavorito); // Ruta que elimina el producto
router.delete("/cart/:id",adminMiddelware, controller.deleteCompra); // Ruta que elimina el producto



/*envio de vistas*/
router.get('/', controller.allproducts); // Te lleva a la vista de todos los productos
router.get('/favoritos',authmiddelware, controller.favoritos);

router.get('/all', controller.allproducts);
router.get("/busqueda", controller.busqueda); // busqueda
router.get('/decoracion', controller.decoracion); // Te lleva a la vista DECORACION
router.get('/usopersonal', controller.usopersonal); // Te lleva a la vista USO PERSONAL
router.get('/viajes', controller.viajes); // Te lleva a la vista VIAJES
router.get('/muebles', controller.muebles); // Te lleva a la vista muebles

router.get('/cart',authmiddelware,controller.comprar);
router.post('/cartStore/:id',authmiddelware,controller.cartStore);
router.get('/inventory',adminMiddelware, controller.inventory); // Te lleva a la vista de todos los productos
router.get("/createproduct",adminMiddelware, controller.create); // Vista de crear
router.get("/editproduct/:id",adminMiddelware, controller.edit); //vista de editar

router.get("/:id", controller.detallar); // Muestra detalle de producto





router.get('/cart',controller.comprar);




module.exports=router; 