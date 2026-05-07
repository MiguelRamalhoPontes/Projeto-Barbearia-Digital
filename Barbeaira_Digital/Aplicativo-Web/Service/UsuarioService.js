const Usuario = require("../mvc/models/UsuarioModel")
const UsuarioSchema = require("../schemas/UsuarioSchemas")

class UsuarioService{
    #usuarioSchema

    constructor()
    {
        this.#usuarioSchema = UsuarioSchema
    }
    async buscarUsuario(id){
        return await this.#usuarioSchema.findAll({where: {id: id}})
    }
}
module.exports = UsuarioService