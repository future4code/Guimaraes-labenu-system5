import {Usuario} from './Usuario'


export class Estudante extends Usuario{

      constructor(
        protected  hobby: string [],
        id: string,
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string,
       

        )
        {
         super( id, nome, email, data_nasc, turma_id)
           

        }

        public getHobby(): string []{
            return this.hobby
        }


}