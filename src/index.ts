import app from "./app"
import { getAllEstudantes } from "./enponits/getAllEstudante"
import { postEstudante } from "./enponits/postEstudante"
import { postDocente } from "./enponits/postDocente"
import { getAllDocente } from "./enponits/getAllDocente"

// Turma


// Turma



// Estudante
    app.get('/estudantes', getAllEstudantes)
    app.post('/estudantes', postEstudante)
// Estudante



// Docente
    app.get('/docentes', getAllDocente)
    app.post('/docentes', postDocente)
// Docente