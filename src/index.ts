import app from "./app"
import { Request, Response } from 'express'
import { EspecialidadeDatabase } from "./data/EspecialidadeDatabase"
import { postTurma } from "./enponits/postTurma";
import { getAllTurma } from "./enponits/getAllTurma";
import { putTurma } from "./enponits/putTurma";

// TURMA

//Pega todas as turmas
app.get("/turmas", getAllTurma);

//Create turmas:
app.post("/turmas", postTurma);

//Update turmas:
app.put("/turmas", putTurma);

// TURMA


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