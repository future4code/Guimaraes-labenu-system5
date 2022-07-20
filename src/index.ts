import app from "./app"
import { Request, Response } from 'express'
import { EspecialidadeDatabase } from "./data/EspecialidadeDatabase"

// TURMA


// TURMA



// ESTUDANTE

// ESTUDANTE



// DOCENTE
app.get('/especialidades', async (req: Request, res: Response) => {

    try {

        const especialidadeDB = new EspecialidadeDatabase()
        const result = await especialidadeDB.getAll()

        res.status(200).send(result)

    }

    catch (error: any) {

        res.status(400).send(error.sqlMessage || error.message)

    }

})
// DOCENTE