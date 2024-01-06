"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comprasControllers_1 = require("../controllers/comprasControllers");
class ComprasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarCompra/', comprasControllers_1.comprasController.listar);
        this.router.post('/crearCompra/', comprasControllers_1.comprasController.crear);
        this.router.get('/mostrarCompra/:id', comprasControllers_1.comprasController.listarUno);
        this.router.put('/actualizarCompra/:id', comprasControllers_1.comprasController.actualizar);
    }
}
const comprasRoutes = new ComprasRoutes();
exports.default = comprasRoutes.router;