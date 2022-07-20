import {Usuario} from './Usuario'


export class Estudante extends Usuario{

    hobbier: string

    constructor(
        id: string,
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        hobbier: string

        )
        {
            super( id, nome, email, data_nasc, turma_id)
            this.hobbier = hobbier

        }

        public getHobbier(): string{
            return this.hobbier
        }


}