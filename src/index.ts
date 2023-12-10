import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerDocument from './swagger.json';
import swagger_ui_express from 'swagger-ui-express';
import indexRoutes from './routes/indexRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import vendedoresRoutes from './routes/vendedoresRoutes';

import empresasRoutes from './routes/vendedoresRoutes';
import ofertasRoutes from './routes/ofertasRoutes';
import rolesRoutes from './routes/rolesRoutes';
class Server
{
    public app: Application;
    constructor()
    {
    this.app= express();
    this.config();
    this.routes();
    this.app.use('/documentacion',swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
    }
    config (): void
    {
        this.app.set('port',process.env.PORT|| 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes (): void
    {
        this.app.use(indexRoutes);
        this.app.use('/api/usuarios', usuariosRoutes);
        this.app.use('/api/usuarios', vendedoresRoutes);
        this.app.use('/api/empresas', empresasRoutes);
        this.app.use('/api/ofertas', ofertasRoutes);
        this.app.use('/api/roles', rolesRoutes);
    }
    start (): void
    {
        this.app.listen(this.app.get('port'), () =>
        {
            console.log('Server on port',this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();