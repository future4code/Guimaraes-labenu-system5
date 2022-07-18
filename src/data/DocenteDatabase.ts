import dotenv from 'dotenv'
import { BaseDatabase } from './BaseDatabase'

dotenv.config()

export class DocenteDataBase extends BaseDatabase {

    public getAll = async () => {

        try {

            const result = await this.connection('LabenuSystem_Docente')
            .select('*')

            return result

        }

        catch (error: any) {

            throw new Error(error.message)

        }
    }

}