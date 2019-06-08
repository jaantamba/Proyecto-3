"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class userControllers {
    /*ESPECIALIDAD*/
    listEspecialidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const persona = yield database_1.default.query('SELECT * FROM especialidad');
            res.json(persona);
        });
    }
    createEspecialidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO doctor set ?', [req.body]); //sincronizacion de la consulta
            res.json({ message: 'Se ha guardado correctament' });
        });
    }
    obtenerUnEspecialidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const persona = yield database_1.default.query('SELECT e.ESP_ID,ESP_NOMBRE,ESP_DESCRIPCION from especialidad e, doctor d where d.ESP_ID= e.ESP_ID AND d.PER_ID = ?', [id]);
            if (persona.length > 0) {
                return res.json(persona[0]);
            }
            res.status(404).json({ text: 'La persona no existe' });
        });
    }
    

    /*CRUD DOCTOR*/ 
    createDoctor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO persona set ?', [req.body]); //sincronizacion de la consulta
            res.json({ message: 'Se ha guardado correctament' });
        });
    }
    listDoctor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const persona = yield database_1.default.query('SELECT p.PER_ID,UPPER(PER_NOMBRES) AS PER_NOMBRES ,UPPER(PER_APELLIDOS) AS PER_APELLIDOS,UPPER(PER_CEDULA) AS PER_CEDULA,PER_TELEFONO,UPPER(PER_DIRECCION) AS PER_DIRECCION,PER_GENERO, PER_TIPO_SANGRE,PER_TIPO,e.ESP_NOMBRE,e.ESP_ID FROM persona p,especialidad e,doctor d WHERE p.PER_ID=d.PER_ID AND d.ESP_ID=e.ESP_ID AND p.PER_TIPO=1');
            res.json(persona);
        });
    }
    obtenerUnDoctor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const persona = yield database_1.default.query('SELECT p.PER_ID,UPPER(PER_NOMBRES) AS PER_NOMBRES ,UPPER(PER_APELLIDOS) AS PER_APELLIDOS,UPPER(PER_CEDULA) AS PER_CEDULA,PER_TELEFONO,UPPER(PER_DIRECCION) AS PER_DIRECCION,PER_GENERO, PER_TIPO_SANGRE,PER_TIPO FROM persona p,especialidad e,doctor d WHERE p.PER_ID=d.PER_ID AND d.ESP_ID=e.ESP_ID AND p.PER_TIPO=1 AND p.PER_ID=?', [id]);
            if (persona.length > 0) {
                return res.json(persona[0]);
            }
            res.status(404).json({ text: 'La persona no existe' });
        });
    }

    obtenerId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const persona = yield database_1.default.query('SELECT MAX(PER_ID)AS "ID" FROM persona WHERE PER_TIPO=1 ORDER by PER_ID DESC');
            if (persona.length > 0) {
                return res.json(persona[0]);
            }
            res.status(404).json({ text: 'La persona no existe' });
        });
    }


    updateDoctor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE persona SET ? WHERE PER_ID=?', [req.body, id]);
            res.json({ text: 'El usuario se ha actualizado' });
        });
    }

    deleteDoctor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM persona WHERE PER_ID = ?', [id]);
            res.json({ text: 'Eliminado Doctor' });
        });
    }
    buscarDoctor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            const aux = 'SELECT p.PER_ID,UPPER(PER_NOMBRES) AS PER_NOMBRES ,UPPER(PER_APELLIDOS) AS PER_APELLIDOS,UPPER(PER_CEDULA) AS PER_CEDULA,PER_TELEFONO,UPPER(PER_DIRECCION) AS PER_DIRECCION,PER_GENERO, PER_TIPO_SANGRE,PER_TIPO,e.ESP_NOMBRE,e.ESP_ID FROM persona p,especialidad e,doctor d WHERE p.PER_ID=d.PER_ID AND p.PER_TIPO=1 AND d.ESP_ID=e.ESP_ID AND (p.PER_NOMBRES LIKE "%'+nombre+'%" or p.PER_APELLIDOS LIKE "%'+nombre+'%" OR p.PER_CEDULA LIKE "%'+nombre+'%")';
            const persona = yield database_1.default.query(aux);
            console.log(aux);
            if (persona.length > 0) {
                res.json(persona);
            }
            res.status(404).json({ text: 'La persona no existe' });
        });
    }
     /*CRUD ENFERMERA*/ 
     createEnfermera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO enfermera set ?', [req.body]); //sincronizacion de la consulta
            res.json({ message: 'Se ha guardado correctamente' });
        });
    }
    obtenerUnaEnfermera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const persona = yield database_1.default.query('SELECT * FROM enfermera WHERE ENF_ID=?', [id]);
            if (persona.length > 0) {
                return res.json(persona[0]);
            }
            res.status(404).json({ text: 'La persona no existe' });
        });
    }
    listEnfermera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const persona = yield database_1.default.query('SELECT * FROM enfermera');
            res.json(persona);
        });
    }
    updateEnfermera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE enfermera SET ? WHERE ENF_ID=?', [req.body, id]);
            res.json({ text: 'El usuario se ha actualizado' });
        });
    }
    deleteEnfermera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM enfermera WHERE ENF_ID = ?', [id]);
            res.json({ text: 'Eliminado Doctor' });
        });
    }
    
    buscarEnfermera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            const aux = 'SELECT * from enfermera WHERE ENF_NOMBRES LIKE "%'+nombre+'%" or ENF_APELLIDOS LIKE "%'+nombre+'%" OR ENF_CEDULA LIKE "%'+nombre+'%"';
            const persona = yield database_1.default.query(aux);
            console.log(aux);
            if (persona.length > 0) {
                res.json(persona);
            }
            res.status(404).json({ text: 'La persona no existe' });
        });
    }

         /*CRUD PACIENTE*/ 
         createPaciente(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                yield database_1.default.query('INSERT INTO paciente set ?', [req.body]); //sincronizacion de la consulta
                res.json({ message: 'Se ha guardado correctamente' });
            });
        }
        obtenerUnPaciente(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = req.params;
                const persona = yield database_1.default.query('SELECT * FROM paciente WHERE PAC_ID=?', [id]);
                if (persona.length > 0) {
                    return res.json(persona[0]);
                }
                res.status(404).json({ text: 'La persona no existe' });
            });
        }
        listPaciente(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const persona = yield database_1.default.query('SELECT * FROM paciente');
                res.json(persona);
            });
        }
        updatePaciente(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = req.params;
                yield database_1.default.query('UPDATE paciente SET ? WHERE PAC_ID=?', [req.body, id]);
                res.json({ text: 'El usuario se ha actualizado' });
            });
        }
        deletePaciente(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = req.params;
                yield database_1.default.query('DELETE FROM paciente WHERE PAC_ID = ?', [id]);
                res.json({ text: 'Eliminado Paciente' });
            });
        }
        buscarPaciente(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const { nombre } = req.params;
                const aux = 'SELECT * from paciente WHERE PAC_NOMBRES LIKE "%'+nombre+'%" or PAC_APELLIDOS LIKE "%'+nombre+'%" OR PAC_CEDULA LIKE "%'+nombre+'%"';
                const persona = yield database_1.default.query(aux);
                console.log(aux);
                if (persona.length > 0) {
                    res.json(persona);
                }
                res.status(404).json({ text: 'La persona no existe' });
            });
        }

}
exports.userController = new userControllers();
