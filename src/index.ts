import app from "./app"
import { v4 as generateId } from 'uuid'
import { Request, Response } from 'express'
import { DocenteDataBase } from "./data/DocenteDatabase"
import { Docente } from "./data/Docente"
import { getAllEstudantes } from "./enponits/getAllEstudante"
import {creatEstudante} from "./enponits/creatEstudante"

// TURMA


// TURMA



// ESTUDANTE

app.get('/estudante', getAllEstudantes)

// ESTUDANTE
app.post('/estudante', creatEstudante)



// DOCENTE
app.get('/docentes', async (req: Request, res: Response) => {

    try {
        const docenteDB = new DocenteDataBase()
        const result = await docenteDB.getDocentes()

        res.status(200).send(result)
    }

    catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }

})

app.post('/docentes', async (req: Request, res: Response) => {

    try {
        const docenteDB = new DocenteDataBase()

        const { nome, email, data_nasc, turma_id, especialidades_id } = req.body

        if (!nome || !email || !data_nasc || !turma_id || !especialidades_id) throw new Error('Informações do body incorretas, checar documentação')

        if (typeof nome !== 'string') throw new Error('O nome deve ser uma string')
        if (typeof email !== 'string') throw new Error('O e-mail deve ser uma string')
        if (typeof data_nasc !== 'string') throw new Error('A data de nascimento deve ser uma string')
        if (typeof turma_id !== 'string') throw new Error('O ID da turma deve ser uma string')
        if (typeof especialidades_id !== 'object') throw new Error('O ID das especialidades deve ser um array de strings')
        especialidades_id.map((id: any) => {
            if (typeof id !== 'string') throw new Error('Os IDs dentro do array devem ser uma string')
        })

        if (!/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(data_nasc)) throw new Error('Data no formato inválido, deve ser dd/mm/yyyy')
        
        const getEspecialidades = await docenteDB.getEspecialidades()

        especialidades_id.map((id: string) => {
            const findId = getEspecialidades.find(item => item.id === id)
            if (!findId) throw new Error('Um ou mais ID de especialidade não encontrado')
        })

        // Faltando checar se ID da turma existe

        const new_data_nasc = `${data_nasc.slice(-4)}-${data_nasc.slice(3, -5)}-${data_nasc.slice(0, -8)}`

        const newDocente = new Docente(
            especialidades_id as string[],
            generateId(),
            nome,
            email,
            new_data_nasc,
            turma_id
        )

        console.log(newDocente)

        await docenteDB.postDocente(newDocente)
        await docenteDB.postDocente_Especialidade(newDocente)

        res.status(201).send('Docente criado com sucesso')

    }

    catch (error: any) {
        res.status(401).send(error.sqlMessage || error.message)
    }

})
// DOCENTE