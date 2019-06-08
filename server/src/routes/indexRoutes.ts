import {Router} from 'express';
import {indexControll} from '../controllers/indexControllers';

class indexRoutes{

    public router:Router = Router();
    
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',indexControll.index); //Enviar codigo al cotrolle
    }

}

const indexRoute = new indexRoutes();
export default indexRoute.router;