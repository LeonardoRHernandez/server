"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const casasControllers_1 = require("../controllers/casasControllers");
class CasasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/crearCasa/', casasControllers_1.casasController.crear);
        this.router.get('/mostrarCasas/', casasControllers_1.casasController.listar);
        this.router.get('/mostrarCasa/:id', casasControllers_1.casasController.listarUno);
        this.router.put('/actualizarCasa/:id', casasControllers_1.casasController.actualizar);
        this.router.delete('/eliminarCasa/:id', casasControllers_1.casasController.eliminar);
    }
}
const casasRoutes = new CasasRoutes();
exports.default = casasRoutes.router;
