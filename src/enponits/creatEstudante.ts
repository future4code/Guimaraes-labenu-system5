import { Request, Response } from "express";
import { Estudante } from "../data/Estudante";
import { EstudanteDataBase } from "../data/EstudanteDataBase";
import {Usuario} from "../types"
import { v4 as generateId } from 'uuid'


export const creatEstudante =async (req: Request, res: Response): Promise <void> =>{


    try {

        const estudanteDB = new EstudanteDataBase
        await estudanteDB.getEstudante()

       

        const { nome, email, data_nasc, turma_id, hobby_id } = req.body

        if (!nome || !email || !data_nasc || !turma_id || !hobby_id) {

            res.statusCode = 400
            throw new Error(" 'nome', 'email', data_nasc', 'turma_id' e 'hobby_id' são obrigatorios!")
        }
        if (typeof nome !== 'string') {
            res.statusCode = 400
            throw new Error('O nome deve ser uma string')
        }

        if (typeof email !== 'string') {
            res.statusCode = 400
            throw new Error('O e-mail deve ser uma string')
        }

        if (!email.includes("@") || !email.includes(".com")) {
            res.statusCode = 401
            throw new Error("O e-mail deve deve conter um '@' e um '.com'")
        }
        if (typeof data_nasc !== 'string') {
            res.statusCode = 400
            throw new Error("A data de nascimento deve ser uma string")
        }

        if (typeof turma_id !== 'string') {
            res.statusCode = 400
            throw new Error('A data de nascimento deve ser uma string')
        }

        if (typeof hobby_id !== 'object') {
            res.statusCode = 400
            throw new Error('O ID dos Hobbys deve ser um array de strings')
        }

        hobby_id.map((id: any) => {
            if (typeof id !== 'string') {
                res.statusCode = 400
                throw new Error('Os IDs dentro do array devem ser uma string')
            }
        })

        if (!/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(data_nasc)) {
            res.statusCode = 400
            throw new Error('Data no formato inválido, deve ser dd/mm/yyyy')
        }

        
//     
        const estudantenew = new Estudante(
            hobby_id as string[],
            generateId(),
            nome,
            email,
            data_nasc,
            turma_id,
            
        )



        res.status(201).send('Estudante criado com sucesso')



    } catch (error: any) {

        res.status(401).send(error.sqlMessage || error.message)
    }
}

