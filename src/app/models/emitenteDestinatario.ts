import { Endereco } from "./endereco";

export interface EmitenteDestinatario{
    tipoPessoa: string,
    crt: number,
    cpfCnpj: number,
    ie?: number,
    razaoSocial: string,
    nomeFantasia: string,
    endereco: Endereco
}