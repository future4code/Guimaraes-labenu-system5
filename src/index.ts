import app from "./app"
import { getAllEstudantes } from "./enponits/getAllEstudante"
import { postEstudante } from "./enponits/postEstudante"
import { postDocente } from "./enponits/postDocente"
import { getAllDocente } from "./enponits/getAllDocente"
import { postHobby } from "./enponits/postHobby"
import { getAllHobby } from "./enponits/getAllHobby"

// Turma


// Turma



// Estudante
    app.get('/estudantes', getAllEstudantes)
    app.post('/estudantes', postEstudante)

    app.get('/hobby', getAllHobby)
    app.post('/hobby', postHobby)
// Estudante



// Docente
    app.get('/docentes', getAllDocente)
    app.post('/docentes', postDocente)
// Docente