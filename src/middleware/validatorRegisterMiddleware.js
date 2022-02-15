const path=require('path');
const {body}=require('express-validator');//requiriendo validator-express

module.exports=[
    body('name').notEmpty().withMessage('Debes escribir un nombre valido').bail()
    .isLength({min:2}).withMessage('EL nombre debe tener minimo 2 caracteres'),
    body('lastname').notEmpty().withMessage('Debes escribir un apellido valido').bail()
    .isLength({min:2}).withMessage('EL Apellido debe tener minimo 2 caracteres'),
    body('email')
    .notEmpty().withMessage('Debes escribir una direccion de correo').bail()
    .isEmail().withMessage('El formato de la direccion de correo no es correcta'),
    body('password').notEmpty().withMessage('Debes escribir una contraseña'),
    body('avatar').custom((value, {req})=>{
        let file=req.file;
        let acceptedExtensions = ['.jpg','.png','.gif','.jpeg'];
        
        if(!file){
            throw new Error('Debes subir una imagen')
        }else{
            let fileExtension=path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
            throw new Error(`Los formatos de archivo permitido son ${acceptedExtensions.join(" , ")} `);
        }
        }
       
        return true;
    })
]; //validaciones que nos da express-generator