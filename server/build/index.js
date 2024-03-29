"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usersroutes_1 = __importDefault(require("./routes/usersroutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3400);
        this.app.use(morgan_1.default('dev')); //ver peticiones al servidor
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); //envio de los datos de la app al servidor
        this.app.use(express_1.default.urlencoded({ extended: false })); //si enviamos de un formularion html 
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/usuarios', usersroutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
