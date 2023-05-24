export interface Endereco {

    cep: number,
    logradouro: string,
    numero?: string,
    complemento?: string,
    bairro: string,
    municipio: string,
    estado: string
}