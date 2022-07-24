import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { Turma } from "../data/Turma";
import { TurmaDatabase } from "../data/TurmaDatabase";





export const  putTurma = async (req: Request, res: Response): Promise<void> => {
        let statusCode = 400;
    
          try {
            const { id, modulo } = req.body;
            if (!id) {
            throw new Error("Parâmetro 'id' faltando. tentar novamente.");
           }
           if (!modulo) {
             throw new Error("Parâmetro 'modulo' faltando. tentar novamente.");
           }
           const turmaDB = new TurmaDatabase();
           await turmaDB.putTurma(id, modulo);
    
          res.status(200).send(`Turma mudou, modulo ${modulo}`);
          } catch (error: any) {
           res.status(statusCode).end();
         }
        
};
