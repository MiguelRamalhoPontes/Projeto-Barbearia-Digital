const Usuario = require("../mvc/models/UsuarioModel")
const UsuarioSchema = require("../schemas/UsuarioSchemas")

class UsuarioService
{
    #usuarioSchema

    constructor(){
        this.#usuarioSchema = UsuarioSchema
    }
    async buscarUsuario(id){
        return await this.#usuarioSchema.findAll({ where: { id: id } })
    }

    async cadastrarUsuario(username, email, senha)
    {
        const usuario = new Usuario(email, senha, username)
        const id = await this.#usuarioSchema.create
        (
            {
                username: usuario.nome,
                email: usuario.email,
                senha: usuario.senha
            }
        )
        return id
    }
    async atualizarUsuario(username, email, senha){

        let id = 1
        const usuario = await this.#usuarioSchema.findByPk(id)
        if(usuario){
            const model = new usuario(
                email || usuario.email,
                senha || usuario.senha,
                username || usuario.username
            )

            const id = await this.#usuarioSchema.update(
                {
                    username: model.nome,
                    email: model.email,
                    senha: model.senha
                },
                {
                    where: { id: id }
                }
            )
        }
        id = affectedRows
        return id
    }
}
module.exports = UsuarioService