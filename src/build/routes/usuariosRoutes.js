"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosControllers_1 = require("../controllers/usuariosControllers");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/crearUsuario/', usuariosControllers_1.usuariosController.crear);
        this.router.get('/mostrarUsuarios/', usuariosControllers_1.usuariosController.listar);
        this.router.get('/mostrarUsuario/:id', usuariosControllers_1.usuariosController.listarUno);
        this.router.put('/actualizarUsuario/:id', usuariosControllers_1.usuariosController.actualizar);
        this.router.delete('/eliminarUsuario/:id', usuariosControllers_1.usuariosController.eliminar);
        this.router.post('/iniciarSesion/', usuariosControllers_1.usuariosController.iniciarSesion);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
