const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db/Connection');


class plantas extends Model {}

plantas.init({
    id_planta:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_planta: DataTypes.STRING,
    tipo_planta: DataTypes.INTEGER,
    foto_planta: DataTypes.STRING,
},{
    sequelize, 
    modelName: 'plantas' 
});


module.exports = {
    plantas,
};

