import { Request, Response } from 'express'
import { EstudanteDataBase } from '../data/EstudanteDataBase'

export const getAllHobby = async (req: Request, res: Response): Promise <void > => {

    try {
        const estudanteDB = new EstudanteDataBase()
        const result = await estudanteDB.getHobby()

        res.status(200).send(result)
    }

    catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }

}