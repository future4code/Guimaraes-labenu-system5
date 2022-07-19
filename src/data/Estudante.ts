import {Usuario} from './Usuario'


export class Estudante extends Usuario{

     hobbier: string

    constructor(
        id: number,
        name: string,
        email: string,
        data_nasc: string,
        turma_id: number,
        hobbier: string

        )
        {
            super( id, name, email, data_nasc, turma_id)
            this.hobbier = hobbier

        }

        public getHobbier(): string{
            return this.hobbier
        }


}