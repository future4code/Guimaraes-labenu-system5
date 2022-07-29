import { Usuario } from "./Usuario";

export class Docente extends Usuario {
    constructor (
        protected especialidade: string[],
        id: string,
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string
    ) {
        super(id, nome, email, data_nasc, turma_id)
    }

    public getEspecialidade (): string[] {
        return this.especialidade
    }
}