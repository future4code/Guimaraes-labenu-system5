import { Request, Response } from 'express';
import { TurmaDatabase } from '../data/TurmaDatabase';
import { Turma } from '../data/Turma'

export const getAllTurma = async (req: Request, res: Response): Promise <void > => {

    try {
        const turmaDB = new TurmaDatabase()
        const result = await turmaDB.getTurmas()

        res.status(200).send(result)
    }

    catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }

}