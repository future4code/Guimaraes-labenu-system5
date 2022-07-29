import { Request, Response } from 'express'
import { DocenteDataBase } from '../data/DocenteDatabase'

export const getAllEspecialidade = async (req: Request, res: Response): Promise <void > => {

    try {
        const docenteDB = new DocenteDataBase()
        const result = await docenteDB.getEspecialidades()

        res.status(200).send(result)
    }

    catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }

}