import { Request, Response } from 'express'
import { EstudanteDataBase } from "../data/EstudanteDataBase";

export const postHobby = async (req: Request, res: Response): Promise <void> => {
    try {
        const { nome } = req.body

        if (!nome) throw new Error('Informações do body incorretas, checar documentação')
        if (typeof nome !== 'string') throw new Error('O nome deve ser uma string')

        const estudanteDB = new EstudanteDataBase()

        await estudanteDB.postHobby(nome)

        res.status(201).send('Hobby criado com sucesso')
    }
    
    catch (error: any) {
        res.status(401).send(error.sqlMessage || error.message)
    }
}