import {Router} from 'express';
import {userController} from '../controllers/userControllers';
class usersRoutes{

    public router:Router = Router();
    
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',userController.list);
        this.router.get('/especialidad/',userController.listEspecialidad);
        
        
        this.router.get('/:id',userController.obtenerUno);
        this.router.post('/',userController.create);
        this.router.delete('/:id',userController.delete);
        this.router.put('/:id',userController.update);
        this.router.get('/obtener/:nombre',userController.buscarPersona);
        this.router.post('/cita/',userController.agendarCita);
        this.router.get('/cita/listTodas/:dia',userController.obtenerCita)
        this.router.get('/obtener/cita/:nombre',userController.buscarCita);
        this.router.delete('/cita/:id',userController.eliminarCita);
        this.router.put('/cita/realizado/:id',userController.trabajoRealizado)
        this.router.get('/cita/list/:id',userController.obtenerUnaCita)
        this.router.put('/cita/actualizar/:id',userController.actualizarCita)
        this.router.get('/cita/lista/realizado',userController.obtenerCitaRealizada)
        this.router.get('/obtener/cita/realizado/:nombre',userController.buscarCitaRealizado);
    }
}

const indexUser = new usersRoutes();
export default indexUser.router;