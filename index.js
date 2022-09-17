const express = require('express')
const app = express()
const path = require('path')
const port = 8000

const homeController = require('./controller/homeController')

const loginController = require('./controller/LoginController')
const registerController = require('./controller/RegisterController')

const UsuarioController = require('./controller/UsuarioController')
const PlantasController = require('./controller/PlantaController')
const PosteosController = require('./controller/PosteoController')
const ComentariosController = require('./controller/ComentarioController')




app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');


//redirecciones

app.get('/', homeController.home)

app.get('/login', loginController.login)

app.get('/register', registerController.register)

app.get('/usuario', UsuarioController.getAll);

app.get('/plantas', PlantasController.getAll);

app.get('/posteos', PosteosController.getAll);

app.get('/comentarios', ComentariosController.getAll);

app.get('*', homeController.notfound)


app.listen(port)
console.log("Esta ejecutando el server: " + "http://localhost:"+port)

