const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')
const router = Router()


router.get("/user/index", (req, res) => UsuarioController.index(req, res))
router.post("/user/create", (req, res) => UsuarioController.usuarioPostAsync(req, res))
router.get("/user/create", (req, res) => UsuarioController.usuarioEditView(req, res))
router.put("/user/edit", (req, res) => UsuarioController.usuarioPutAsync(req, res))


module.exports = router