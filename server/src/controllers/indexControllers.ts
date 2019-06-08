import {Request,Response} from 'express';

class indexControllers{
    public index (req:Request,res:Response){
        res.json({text:'Apis is dasda'});
    }
}
export const indexControll = new indexControllers();