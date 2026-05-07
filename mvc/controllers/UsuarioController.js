const UsuarioService = require("../../services/UsuarioService")
class UsuarioController
{
    constructor()
    {
        this.usuarioService = new UsuarioService()
    }

    async index(req, res)
    {
        const usuarios = await this.usuarioService.buscarUsuario(req.params.id)
        res.render("Usuario/UsuarioView", {usuarios})
    }
    async usuarioEditView(req, res){
        res.render("Usuario/EditView")
    }

    async usuarioPostAsync(req, res)
    {
        const id = await this.usuarioService.cadastrarUsuario(
            req.body.email,
            req.body.senha,
            req.body.username
        )
        res.json({id})
    }

        async usuarioPutAsync(req, res){
        const id = await this.usuarioService.atualizarUsuario(
            req.body.id,
            req.body.email,
            req.body.senha,
            req.body.username
        )
        res.json({affectedRows: affectedRows})
        }
}

module.exports = new UsuarioController()    