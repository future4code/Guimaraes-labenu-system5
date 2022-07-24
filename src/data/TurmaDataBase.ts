import dotenv from 'dotenv'
import { v4 as generateId } from 'uuid'
import { BaseDatabase } from './BaseDatabase'
import { Turma } from './Turma'


dotenv.config()

export class TurmaDataBase extends BaseDatabase {

    public getAllTurma = async () => {
        try {
            const result = await this.connection('LabenuSystem_Turma')
            .select('*')

            return result
        }

        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public postTurma = async (turma: Turma) => {
        try {
            await this.connection('LabenuSystem_Turma')
            .insert({
                id: turma.getId(),
                nome: turma.getNome(),
                modulo: turma.getModulo()
            })
        }

        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public putTurma = async (id: string, modulo: string) => {
        try {
            await this.connection('LabenuSystem_Turma')
            .where('id', '=', id)
            .update({
                modulo: modulo
            })
        }

        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}