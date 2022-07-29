import { Request, Response } from 'express'
import { TurmaDataBase } from '../data/TurmaDataBase'

export const putTurma = async (req: Request, res: Response): Promise <void> => {
    try {
        const { modulo } = req.body
        const { id } = req.params

        if (!modulo) throw new Error('Informações no body incorretas, checar documentação')
        if (typeof modulo !== 'string') throw new Error('O modulo deve ser uma string')

        const turmaDB = new TurmaDataBase()

        await turmaDB.putTurma(id , modulo)

        res.status(201).send('Modulo da turma atualizado com sucesso')
    }
    
    catch (error: any) {
        res.status(401).send(error.sqlMessage || error.message)
    }
}