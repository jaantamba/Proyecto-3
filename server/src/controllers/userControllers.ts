import {Request,Response} from 'express';

import pool from '../database';
class userControllers{
    public async list (req:Request,res:Response){ 
          const persona = await pool.query('SELECT * FROM persona');
          res.json(persona);
    }

    public async listEspecialidad (req:Request,res:Response){ 
        const persona = await pool.query('SELECT * FROM especialidad');
        res.json(persona);
    }

    public async create(req:Request,res:Response):Promise<void>{
        await pool.query('INSERT INTO persona set ?',[req.body]);//sincronizacion de la consulta
        res.json({message: 'Se ha guardado correctament'});
    }
    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM persona WHERE id_persona = ?',[id]);
        res.json({text:'Eliminando persona'})   
    }
    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE persona SET ? WHERE id_persona=?',[req.body,id]);
        res.json({text:'El usuario se ha actualizado'})
    }
    public async obtenerUno(req:Request,res:Response){
        const {id}=req.params;
        const persona = await pool.query('SELECT * FROM persona WHERE id_persona=?',[id]);
        if(persona.length>0){
            return res.json(persona[0]);
        }
        res.status(404).json({text:'La persona no existe'});
    }
    public async buscarPersona(req:Request, res:Response){
        const {nombre}=req.params;
        const aux='SELECT * FROM persona WHERE (nombre_persona LIKE "%'+nombre+'%")OR(apellido_persona LIKE "%'+nombre+'%")';
        const persona = await pool.query(aux);
        console.log(aux);
        if(persona.length>0){
            res.json(persona);
        }
        res.status(404).json({text:'La persona no existe'});
    }
    public async agendarCita(req:Request,res:Response):Promise<void>{
        const{id}=req.params;
        await pool.query('INSERT INTO cita set ?',[req.body]);
        res.json({text:'La cita se ha almacenado correctamente'});
    }
    public async obtenerCita(req:Request,res:Response){
        const{dia}=req.params;
        const cita=await pool.query('SELECT *,DATE_FORMAT(fecha, "%d/%m/%y") AS fecha,UNIX_TIMESTAMP(fecha) as DATE FROM cita c, persona p WHERE noW() >= DATE_ADD(c.fecha,INTERVAL -? DAY) and c.id_persona=p.id_persona and realizado="0"  ORDER BY DATE ASC;',[dia]);
        res.json(cita);
    }
    public async obtenerUnaCita(req:Request,res:Response){
        const {id}=req.params;
        const cita=await pool.query('SELECT *,DATE_FORMAT(fecha, "%Y-%m-%d") AS fecha,UNIX_TIMESTAMP(fecha) as DATE FROM cita c, persona p WHERE c.id_persona=p.id_persona and realizado="0" and c.id_persona= ?  ORDER BY DATE ASC;',[id]);
        if(cita.length>0){
            return res.json(cita[0]);
        }
        res.status(404).json({text:'La cita no existe'});
    }
    public async buscarCita(req:Request,res:Response){
        const {nombre}=req.params;
        const aux = 'SELECT *,DATE_FORMAT(fecha, "%d/%m/%y") AS fecha, UNIX_TIMESTAMP(fecha) as DATE FROM cita c, persona p WHERE noW() >= DATE_ADD(c.fecha,INTERVAL -7 DAY) and (p.nombre_persona LIKE "%'+nombre+'%" or p.apellido_persona LIKE "%'+nombre+'%") and c.id_persona=p.id_persona and c.realizado="0"  ORDER BY DATE ASC;'
        const cita = await pool.query(aux);
        console.log(aux);
        if(cita.length>0){
            res.json(cita);
        }
        res.status(404).json({text:'La persona no existe'});
    }
    public async eliminarCita(req:Request,res:Response){
        const {id}=req.params;
        await pool.query('DELETE FROM cita WHERE id_cita = ?',[id]);
        res.json({text:'Eliminando trabajo'})   
    }
    public async trabajoRealizado(req:Request,res:Response){
        const {id}=req.params;
        await pool.query('UPDATE cita SET ? WHERE id_cita = ?;',[req.body,id]);
        res.json({text:'La cita se ha realizado'})

    }
    public async actualizarCita(req:Request,res:Response){
        const {id}=req.params;
        await pool.query('UPDATE cita SET ? WHERE id_cita = ?;',[req.body,id]);
        res.json({text:'El usuario se ha actulizado correctamente'})
    }
    public async obtenerCitaRealizada(req:Request,res:Response){
        const cita=await pool.query('SELECT *,DATE_FORMAT(fecha, "%d/%m/%y") AS fecha,UNIX_TIMESTAMP(fecha) as DATE FROM cita c, persona p WHERE c.id_persona=p.id_persona and realizado="1"  ORDER BY DATE ASC;');
        res.json(cita);
    }
    public async buscarCitaRealizado(req:Request,res:Response){
        const {nombre}=req.params;
        const aux = 'SELECT *,DATE_FORMAT(fecha, "%d/%m/%y") AS fecha, UNIX_TIMESTAMP(fecha) as DATE FROM cita c, persona p WHERE (p.nombre_persona LIKE "%'+nombre+'%" or p.apellido_persona LIKE "%'+nombre+'%") and c.id_persona=p.id_persona and c.realizado= 1 ORDER BY DATE ASC;'
        const cita = await pool.query(aux);
        console.log(aux);
        if(cita.length>0){
            res.json(cita);
        }
        res.status(404).json({text:'La cita no existe'});
    }
}
export const userController = new userControllers();
