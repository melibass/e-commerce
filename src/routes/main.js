const express = require('express');
const router = express.Router();
const controller = require('../controller/mainController');


router.get('/', controller.home);
router.get('/about', controller.about);

/*about, contacto, etc*/


module.exports = router;