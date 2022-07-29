import { Request, Response } from 'express'
import { Turma } from '../data/Turma'
import { TurmaDataBase } from '../data/TurmaDataBase'
import { v4 as generateId } from 'uuid'

export const postTurma = async (req: Request, res: Response): Promise <void> => {
    try {
        const { nome, modulo } = req.body

        if (!nome) throw new Error('Informações no body incorretas, checar documentação')
        if (typeof nome !== 'string') throw new Error('O nome deve ser uma string')

        const turmaDB = new TurmaDataBase()
        const newTurma = new Turma(generateId(), nome, modulo)

        await turmaDB.postTurma(newTurma)

        res.status(201).send('Turma criado com sucesso')
    }
    
    catch (error: any) {
        res.status(401).send(error.sqlMessage || error.message)
    }
}