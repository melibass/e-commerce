const path=require('path');
const {body}=require('express-validator');//requiriendo validator-express

module.exports=[
  body("name").notEmpty().withMessage('Tienes que escribir un nombre'),
  body('description').notEmpty().withMessage('Tienes que escribir una descripcion'),
  body('category').notEmpty().withMessage('Tienes que elegir una categoria'),
  body('measurements').notEmpty().withMessage('Tienes que poner una medida'),
  body('color').notEmpty().withMessage('Tienes que elegir un color'),
  body('material').notEmpty().withMessage('Tienes que poner un material'),
  body('origin').notEmpty().withMessage('Tienes que poner un origen'),
  body('price').notEmpty().withMessage('Tienes que poner un precio'),
	body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg' ];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]