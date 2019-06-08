import express,{Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import usersroutes from './routes/usersroutes';
import morgan from 'morgan';
import cors from 'cors';

class Server{
    public app: Application
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config():void{
        this.app.set('port',process.env.PORT ||3000);
        this.app.use(morgan('dev')); //ver peticiones al servidor
        this.app.use(cors());
        this.app.use(express.json()); //envio de los datos de la app al servidor
        this.app.use(express.urlencoded({extended:false})) //si enviamos de un formularion html 
        
    }
    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/usuarios',usersroutes);

    }
    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();