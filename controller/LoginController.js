const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db/Connection.js');

const {usuarios} = require('../models/Usuario')


function login(req, res) {
    res.render('login')
}

async function logeo(req, res){
    const datos = req.body;
    let user = await usuarios.findOne({ where: { correo: datos.email} });
    console.log(user)
    if (!user) {
        let error= true
        let log= {
            error
        }
        res.render("login", log)
    }else if (datos.contraseña !== user.password){
        let error= true
        let log= {
            error
        }
        res.render("login", log)
    }else{
        req.session.user= user.id_usuario;
        let loggedin= true
        let log= {
            loggedin
        }
        console.log(req.session.user);
        // res.write(`<p>bienvenido ${user.nom_usuario}</p>`);
        // res.write('<a href="/"> ir al index</a>')
        res.render("index", log)
    }
}


module.exports = {
    login : login,
    logeo : logeo

}