const {DataTypes, Model} = require('sequelize');
const sequelize = require("../Database/dbconfig");

class Atendimento extends Model {}

Atendimento.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {is: /^\d{10,11}$/,},
    },
    horario: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {is: /^(0[8-9]|1[0-8]):([0-5]\d)$|^19:00$/},
    },
    tempoService: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TipoService: {
        type: DataTypes.ENUM("Cabelo", "Barba", "Sobrancelha"),
        allowNull: false,
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {isDate: true,},
    },
}, 
{
        sequelize,
        modelName: 'Atendimento',
        tableName: 'Atendimentos',
    },)

    module.exports = Atendimento