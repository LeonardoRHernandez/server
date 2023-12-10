"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventaController_1 = require("../controllers/ventaControllers");
class VentaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/createOferta/', ventaController_1.ventaController.createOferta);
    }
}
const ventaRoutes = new VentaRoutes();
exports.default = ventaRoutes.router;
