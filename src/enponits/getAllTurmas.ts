import { Request, Response } from 'express'
import { TurmaDataBase } from '../data/TurmaDataBase'

export const getAllTurmas = async (req: Request, res: Response): Promise <void > => {

    try {
        const turmaDB = new TurmaDataBase()
        const result = await turmaDB.getAllTurma()

        res.status(200).send(result)
    }

    catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }

}