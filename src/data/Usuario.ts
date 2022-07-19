
export class Usuario{

    private id: number;
    private name: string;
    private email: string;
    private data_nasc: string;
    private turma_id: number

    constructor(
        id: number,
        name: string,
        email: string,
        data_nasc: string,
        turma_id: number
    )
    {
        this.id = id
        this.name = name
        this.email = email
        this.data_nasc = data_nasc
        this.turma_id = turma_id
    }

    public getId (): number{
        return this.id
    }

    public getName () : string{
        return this.name
    }

    public getEmail (): string{
        return this.email
    }

    public getData_nasc (): string{
        return this.data_nasc
    }

    public getTurma_id (): number{
        return this.turma_id
    }



}