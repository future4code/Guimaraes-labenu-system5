import dotenv from 'dotenv'
import { v4 as generateId } from 'uuid'
import { BaseDatabase } from './BaseDatabase'
import { Docente } from './Docente'

dotenv.config()

export class DocenteDataBase extends BaseDatabase {

    public getDocentes = async () => {
        try {
            const result = await this.connection('LabenuSystem_Docente')
            .select('*')

            return result
        }

        catch (error: any) {
            throw new Error(error.message)
        }
    }

    public getEspecialidades = async () => {
        try {
            const result = await this.connection('LabenuSystem_Especialidade')
            .select('*')

            return result
        }

        catch (error: any) {
            throw new Error(error.message)
        }
    }

    public postDocente = async (docente: Docente) => {
        try {
            await this.connection('LabenuSystem_Docente')
            .insert({
                id: docente.getId(),
                nome: docente.getNome(),
                email: docente.getEmail(),
                data_nasc: docente.getData_nasc(),
                turma_id: docente.getTurma_id()
            })
        }

        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public postDocente_Especialidade = async (docente: Docente) => {
        try {
            docente.getEspecialidade().map(async especialidadeId => {
                await this.connection('LabenuSystem_Docente_Especialidade')
                .insert({
                    id: generateId(),
                    docente_id: docente.getId(),
                    especialidade_id: especialidadeId
                })
            })
        }

        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    public putDocente = async (id: string, turma: string) => {
        try {
            await this.connection('LabenuSystem_Docente')
            .where('id', id)
            .update({
                turma_id: turma
            })
        }

        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}