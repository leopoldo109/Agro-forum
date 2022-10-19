const { Model, DataTypes, update} = require('sequelize');
const sequelize = require('../db/Connection.js');

const { usuarios } = require('../models/Usuario.js');

async function Home(req, res) {
    if(req.session.user){
        console.log(req.session.user)
        let loggedin= true
        let log= {
            loggedin
        }
        res.render('index',log)
    }else{
        console.log(req.session.user)
        res.render('index')
    }
}



function notfound(req, res) {
    res.render('not-found-page')
}

module.exports = {
    home : Home,
    notfound
}