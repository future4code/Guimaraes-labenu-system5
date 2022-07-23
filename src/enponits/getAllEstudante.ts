import { Request, Response } from "express";
import { EstudanteDataBase } from "../data/EstudanteDataBase";
import{Estudante} from '../data/Estudante'


export const getAllEstudantes =async (req: Request, res: Response): Promise <void > => {

    try {

        const estudanteDB =new EstudanteDataBase
        await estudanteDB.getEstudante()

        if(!estudanteDB){
            res.statusCode= 400
            throw new Error("Estudante não encontado")

        }

       res.status(200).send(estudanteDB)
        
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
        
    }
    
}