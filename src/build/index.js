"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const vendedoresRoutes_1 = __importDefault(require("./routes/vendedoresRoutes"));
const casasRoutes_1 = __importDefault(require("./routes/casasRoutes"));
const administradoresRoutes_1 = __importDefault(require("./routes/administradoresRoutes"));
const nosotrosRoutes_1 = __importDefault(require("./routes/nosotrosRoutes"));
const mas_infoRoutes_1 = __importDefault(require("./routes/mas_infoRoutes"));
const comprasRoutes_1 = __importDefault(require("./routes/comprasRoutes"));
const citasRoutes_1 = __importDefault(require("./routes/citasRoutes"));

class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.use('/documentacion', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/usuarios', usuariosRoutes_1.default);
        this.app.use('/api/vendedores', vendedoresRoutes_1.default);
        this.app.use('/api/casas', casasRoutes_1.default);
        this.app.use('/api/nosotros', nosotrosRoutes_1.default);
        this.app.use('/api/mas_info', mas_infoRoutes_1.default);
        this.app.use('/api/compras', comprasRoutes_1.default);
        this.app.use('/api/citas', citasRoutes_1.default);
        this.app.use('/api/administradores', administradoresRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
