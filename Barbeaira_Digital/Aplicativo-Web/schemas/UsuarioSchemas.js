const {DataTypes, Model} = require('sequelize');
const sequelize = require("../Database/dbconfig");

class Usuario extends Model {}

Usuario.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING, 
        unique: true,
        validate: {isEmail: true,},
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {is: /^\d{10,11}$/,},
    },
    cpf: {
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {is: /^\d{11}$/,},
    },
}, 
{
        sequelize,
        modelName: 'User',
        tableName: 'Users',
    },)

    module.exports = Usuario