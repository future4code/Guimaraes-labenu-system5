import app from "./app"
import { getAllEstudantes } from "./enponits/getAllEstudante"
import { postEstudante } from "./enponits/postEstudante"
import { postDocente } from "./enponits/postDocente"
import { getAllDocente } from "./enponits/getAllDocente"
import { postHobby } from "./enponits/postHobby"
import { getAllHobby } from "./enponits/getAllHobby"
import { getAllTurmas } from "./enponits/getAllTurmas"
import { postTurma } from "./enponits/postTurma"
import { putTurma } from "./enponits/putTurma"
import { putDocente } from "./enponits/putDocente"
import { putEstudante } from "./enponits/putEstudante"
import { getAllEspecialidade } from "./enponits/getEspecialidade"

// Turma
    app.get('/turmas', getAllTurmas)
    app.post('/turmas', postTurma)
    app.put('/turmas/:id', putTurma)
// Turma



// Estudante
    app.get('/estudantes', getAllEstudantes)
    app.post('/estudantes', postEstudante)
    app.put('/estudantes/:id', putEstudante)

    app.get('/hobby', getAllHobby)
    app.post('/hobby', postHobby)
// Estudante



// Docente
    app.get('/docentes', getAllDocente)
    app.post('/docentes', postDocente)
    app.put('/docentes/:id', putDocente)

    app.get('/especialidades', getAllEspecialidade)
// Docente