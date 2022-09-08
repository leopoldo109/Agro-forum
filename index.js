const express = require('express')
const homeController = require('./controller/homeController')
const loginController = require('./controller/LoginController')
const registerController = require('./controller/RegisterController')
const app = express()
const path = require('path')
const port = 8000



app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');


//redirecciones

app.get('/', homeController.home)

app.get('/login', loginController.login)

app.get('/register', registerController.register)

app.get('*', homeController.notfound)


app.listen(port)
console.log("Esta ejecutando el server: " + "http://localhost:"+port)

