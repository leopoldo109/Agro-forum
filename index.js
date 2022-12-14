//inicializadores
const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const port = 8000
const exphbs = require ('express-handlebars')
const _handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const homeController = require('./controller/homeController')

const loginController = require('./controller/LoginController')
const registerController = require('./controller/RegisterController')
const LogoutController = require('./controller/LogoutController')

const PerfilController = require('./controller/PerfilController')
const PlantasController = require('./controller/PlantaController')
const PosteosController = require('./controller/PosteoController')

const MiddlewareController = require ('./controller/MiddlewareController')
const { authMiddleware } = require('./controller/MiddlewareController')

// configuracion
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  handlebars: allowInsecurePrototypeAccess(_handlebars),
}))

app.set('view engine', 'hbs');

app.use(session({
  secret: 'botanicos',
  resave: false,
  saveUninitialized: true,
}));

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(MiddlewareController.sessionMiddleware)


//redirecciones

app.get('/', homeController.home);

app.get('/login', loginController.login)

app.post('/login', registerController.upload ,registerController.register);

app.post('/', loginController.logeo);

/* API */
app.post('/api/plantas', PlantasController.create);

app.put('/api/plantas/:id', PlantasController.edit);

app.get('/api/plantas', PlantasController.viewAll);

app.delete('/api/plantas/:id', PlantasController.deleteOne);

app.get('/api/plantas/:id', PlantasController.viewOne)


app.get('/perfil', MiddlewareController.authMiddleware ,PerfilController.getAll);

app.post('/perfil', PerfilController.upload ,PerfilController.updat);


// crear y ver posteos

app.get('/crear', MiddlewareController.authMiddleware, PosteosController.crear);

app.post('/crear', PosteosController.upload,PosteosController.crearPost);

app.get('/posteos', PosteosController.getAll);

app.get('/posteo/:id', MiddlewareController.authMiddleware,PosteosController.getbyId);

app.post('/posteo/', PosteosController.upload,PosteosController.editar)

// Comentarios

app.post('/comentar', PosteosController.comentar)


app.get('/logout', LogoutController.logout);

app.get('*', homeController.notfound)

app.listen(port)
console.log("Esta ejecutando el server: " + "http://localhost:"+port)

