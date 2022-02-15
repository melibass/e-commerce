const express = require('express');
const router = express.Router();
const controller = require('../controller/usersController');
const guestmiddelware = require("../middleware/guestMiddleware");
const authmiddelware = require("../middleware/authmiddleware");
const changemiddleware = require("../middleware/validatorchangeMiddleware");
const adminMiddleware = require("../middleware/adminMidleware");



/*middleware*/
const uploadFile =require('../middleware/multerMiddleware');
const validation=require ('../middleware/validatorRegisterMiddleware');




/*Register*/
router.get('/register',guestmiddelware, controller.register);
//proceso de registro
router.post('/register',uploadFile.single('avatar'),validation,controller.processRegister);

    
/*Login*/
router.get('/login',guestmiddelware,controller.login);
router.post('/login',controller.logged);

/*Perfil de usuario*/ 
router.get('/userprofile',authmiddelware, controller.userProfile);

/*Logout*/ 
router.get("/logout/", controller.logout);

/*Editar Usuario*/ 
router.get("/edituser/:id", controller.editProfile);
router.put("/edituser/:id",uploadFile.single('avatar'), changemiddleware, controller.savechangesprofile);

/*Borrar Usuario*/
router.delete("/:id", controller.delete);

/*listado usuarios*/
router.get("/list/",guestmiddelware, controller.list); // ver si esta ok la proteccion de la vista

module.exports = router; 