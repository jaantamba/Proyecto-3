"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
class usersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        /*Espcialidad*/
        this.router.get('/especialidad/', userControllers_1.userController.listEspecialidad);
        this.router.post('/especialidad/', userControllers_1.userController.createEspecialidad);
        this.router.get('/especialidad/:id', userControllers_1.userController.obtenerUnEspecialidad);
        
        
        /*Doctor Services*/
        this.router.post('/doctor/', userControllers_1.userController.createDoctor);
        this.router.get('/doctor/', userControllers_1.userController.listDoctor);
        this.router.get('/doctor/obtenerid/', userControllers_1.userController.obtenerId);
        this.router.get('/doctor/:id', userControllers_1.userController.obtenerUnDoctor);
        this.router.put('/doctor/:id', userControllers_1.userController.updateDoctor);
        this.router.delete('/doctor/:id', userControllers_1.userController.deleteDoctor);
        this.router.get('/doctor/obtener/:nombre', userControllers_1.userController.buscarDoctor);

        /*Enfermera Services*/
        this.router.post('/enfermera/', userControllers_1.userController.createEnfermera);
        this.router.get('/enfermera/', userControllers_1.userController.listEnfermera);
        this.router.get('/enfermera/:id', userControllers_1.userController.obtenerUnaEnfermera);
        this.router.put('/enfermera/:id', userControllers_1.userController.updateEnfermera);
        this.router.delete('/enfermera/:id', userControllers_1.userController.deleteEnfermera);
        this.router.get('/enfermera/obtener/:nombre', userControllers_1.userController.buscarEnfermera);

        /*Paciente Services*/
        
        this.router.post('/paciente/', userControllers_1.userController.createPaciente);
        this.router.get('/paciente/', userControllers_1.userController.listPaciente);
        this.router.get('/paciente/:id', userControllers_1.userController.obtenerUnPaciente);
        this.router.put('/paciente/:id', userControllers_1.userController.updatePaciente);
        this.router.delete('/paciente/:id', userControllers_1.userController.deletePaciente);
        this.router.get('/paciente/obtener/:nombre', userControllers_1.userController.buscarPaciente);




    }
}
const indexUser = new usersRoutes();
exports.default = indexUser.router;
