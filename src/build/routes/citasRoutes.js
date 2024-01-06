"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const citasControllers_1 = require("../controllers/citasControllers");
class CitasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarCitas/', citasControllers_1.citasController.listar);
        this.router.post('/crearCita/', citasControllers_1.citasController.crear);
        this.router.get('/mostrarCitas/:id', citasControllers_1.citasController.listarUno);
        this.router.put('/actualizarCita/:id', citasControllers_1.citasController.actualizar);
        this.router.delete('/eliminarCita/:id', citasControllers_1.citasController.eliminar);
    }
}
const citasRoutes = new CitasRoutes();
exports.default = citasRoutes.router;