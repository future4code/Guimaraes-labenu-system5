import { Request, Response } from 'express'
import { DocenteDataBase } from '../data/DocenteDatabase'
import { TurmaDataBase } from '../data/TurmaDataBase'

export const putDocente = async (req: Request, res: Response): Promise <void> => {
    try {
        const { turma_id } = req.body
        const { id } = req.params

        if (!turma_id) throw new Error('Informações no body incorretas, checar documentação')
        if (typeof turma_id !== 'string') throw new Error('O modulo deve ser uma string')

        const docenteDB = new DocenteDataBase()
        const turmaDB = new TurmaDataBase()

        const allTurmas = await turmaDB.getAllTurma()
        const findId = allTurmas.find(item => item.id === turma_id)

        if (!findId) throw new Error('Id da turma não encontrado')

        await docenteDB.putDocente(id , turma_id)

        res.status(201).send('Turma do docente atualizado com sucesso')
    }
    
    catch (error: any) {
        res.status(401).send(error.sqlMessage || error.message)
    }
}