import { Departamento } from "./departamentos";

export interface Funcionario {
    id?: number;
    nome: string;
    foto: File;
    rg: string;
    departamento: Departamento;
    departamentoId?: number;
}