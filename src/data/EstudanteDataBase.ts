import dotenv from 'dotenv'
import { v4 as generateId } from 'uuid'
import { BaseDatabase } from './BaseDatabase'
import { Estudante } from './Estudante'


dotenv.config()

export class EstudanteDataBase extends BaseDatabase{

    public getEstudante =async () =>{

        try {

            const result = await this.connection('LabenuSystem_Estudante')
            .select("*")

           return result

        } catch (error:any) {
          
           throw new Error(error.sqlMessage || error.message)
            
        }
    }
    

    public getHobby = async () => {

        try {
            const result = await this.connection('LabenuSystem_Hobby')
            .select('*')

            return result
        }

        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    public creatEstudante = async (estudante: Estudante) => {

        try {
            await this.connection('LabenuSystem_Estudante')
            .insert({
                id: estudante.getId(),
                nome: estudante.getNome(),
                email: estudante.getEmail(),
                data_nasc: estudante.getData_nasc(),
                turma_id: estudante.getTurma_id()
            })
        }

        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    public creatEstudante_Hobby = async (estudante: Estudante) => {

        try {
            estudante.getHobby().map(async hobbyId => {
                await this.connection('LabenuSystem_Estudante_Hobby')
                .insert({
                    id: generateId(),
                    estudante_id: estudante.getId(),
                    hobby_id: hobbyId 
                })
            })
        }

        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

}}


