"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const administradoresControllers_1 = require("../controllers/administradoresControllers");
class AdministradoresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/crearAdministrador/', administradoresControllers_1.administradorController.crear);
        this.router.get('/mostrarAdministradores/', administradoresControllers_1.administradorController.listar);
        this.router.get('/mostrarAdministrador/:id', administradoresControllers_1.administradorController.listarUno);
        this.router.put('/actualizarAdministrador/:id', administradoresControllers_1.administradorController.actualizar);
        this.router.delete('/eliminarAdministrador/:id', administradoresControllers_1.administradorController.eliminar);

    }
}
const administradoresRoutes = new AdministradoresRoutes();
exports.default = administradoresRoutes.router;
