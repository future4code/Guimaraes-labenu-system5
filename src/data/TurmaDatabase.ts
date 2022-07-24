import dotenv from 'dotenv'
import { BaseDatabase } from "./BaseDatabase";
import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { Turma } from "./Turma";

dotenv.config()

export class TurmaDatabase extends BaseDatabase {

  public postTurma = async (newClass: Turma)  => {

    try {

      const result = await this.connection('LabenuSystem_Turma')
      .insert(newClass);

    } catch (error: any) {

      throw new Error(error.sqlMessage || error.menssage);
    }
  };

    public getTurmas = async () => {
      try {

        const result = await this.connection('LabenuSystem_Turma');

       return result

    } catch (error:any) {
      
       throw new Error(error.sqlMessage || error.message)
        
    }
}

   public putTurma = async (id: string, novoModulo: string) => {
    try {
       const result = await this.connection('LabenuSytem_Turma')
        .where("id", id)
        .update({ modulo: novoModulo });

        return result

    } catch (error: any) {

      throw new Error(error.sqlMessage || error.message);
    }
  };
}