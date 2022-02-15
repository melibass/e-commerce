const express=require('express');
const path = require('path');
const app = express();
const ejs = require ('ejs');
const methodOverride = require('method-override'); // agregamos method override
const session = require("express-session"); // requerimos session para usuarios
const usserloggedmiddleware = require("./middleware/userloggedmiddleware");
const cookies = require("cookie-parser");
const cors = require("cors")
require("dotenv").config()


/* config template ejs*/
app.set('view engine', 'ejs');
app.set ('views', path.resolve(__dirname, 'views'));

/*Config method */
app.use(methodOverride('_method'));


/*Config session */
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
}));

/*habilitar cookies */
app.use(cookies())

/*chequeando si hay usuarios logueados */
app.use(usserloggedmiddleware);

app.use(cors())


/*Config express */
app.use(express.static(path.resolve(__dirname,"../public"))); // para que la carpeta public se disponibilice


/* config para poder usar post */
app.use(express.urlencoded({ extended: false })) // para poder usar method post
app.use(express.json()) // para poder usar method post

/* Routes */
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const mainRouter = require('./routes/main');
const apiRouter = require('./routes/ApiUsers');
//const userloggedmiddleware = require('./middleware/userloggedmiddleware');

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/api', apiRouter);


/*el error*/

app.use(function(req, res, next) {
    res.status(404).render('not-found')
});



app.listen(3001,()=>console.log("server corriendo en el puerto 3001"));
