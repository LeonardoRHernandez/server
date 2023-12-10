"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nosotrosControllers_1 = require("../controllers/nosotrosControllers");
class NosotrosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarNosotros/', nosotrosControllers_1.nosotrosController.listar);
        this.router.put('/actualizarNosotros/:id', nosotrosControllers_1.nosotrosController.actualizar);
    }
}
const nosotrosRoutes = new NosotrosRoutes();
exports.default = nosotrosRoutes.router;
