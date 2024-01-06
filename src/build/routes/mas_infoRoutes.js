"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mas_infoControllers_1 = require("../controllers/mas_infoControllers");
class Mas_infoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarInfo/', mas_infoControllers_1.mas_infoController.listar);
        this.router.post('/crearInfo/', mas_infoControllers_1.mas_infoController.crear);
        this.router.get('/mostrarInfo/:id', mas_infoControllers_1.mas_infoController.listarUno);
        this.router.put('/actualizarInfo/:id', mas_infoControllers_1.mas_infoController.actualizar);
        this.router.delete('/eliminarInfo/:id', mas_infoControllers_1.mas_infoController.eliminar);
    }
}
const mas_infoRoutes = new Mas_infoRoutes();
exports.default = mas_infoRoutes.router;