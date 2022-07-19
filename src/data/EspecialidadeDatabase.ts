import dotenv from 'dotenv'
import { BaseDatabase } from './BaseDatabase'
import { v4 as generateId } from 'uuid'

dotenv.config()

export class EspecialidadeDatabase extends BaseDatabase {

    public getAll = async () => {

        try {

            const result = await this.connection('LabenuSystem_Especialidade')
            .select('*')

            return result

        }

        catch (error: any) {

            throw new Error(error.message)

        }
    }

    public post = async (nome: string) => {

        try {

            console.log(nome)

            await this.connection('LabenuSystem_Especialidade')
            .insert({
                id: generateId(),
                nome
            })

        }

        catch (error: any) {

            throw new Error(error.message)

        }

    }

}