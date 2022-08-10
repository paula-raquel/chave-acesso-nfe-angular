
export enum UFEstado{
    "Rondônia (RO)" = 11, 
    "Acre (AC)" = 12, 
    "Amazonas (AM)" = 13,
    "Roraima (RR)" = 14, 
    "Pará (PA)" = 15, 
    "Amapá (AP)" = 16, 
    "Tocantins(TO)" = 17, 
    "Maranhão (MA)" = 21,
    "Piauí	(PI)" = 22,
    "Ceará (CE)" = 23,
    "Rio Grande do Norte (RN)" = 24 ,
    "Paraíba (PB)" = 25, 
    "Pernambuco (PE)" = 26,
    "Alagoas (AL)" = 27, 
    "Sergipe (SE)" = 28,
    "Bahia	(BA)" = 29,
    "Minas Gerais (MG)" = 31,
    "Espírito Santo (ES)" = 32,
    "Rio de Janeiro (RJ)" = 33,
    "São Paulo	(SP)" = 35 ,
    "Paraná (PR)" = 41,
    "Santa Catarina (SC)" = 42,
    "Rio Grande do Sul	(RS)" = 43,
    "Mato Grosso do Sul (MS)" = 50,
    "Mato Grosso (MT)" = 51,
    "Goiás (GO)" = 52,
    "Distrito Federal (DF)" = 53
}

export interface ChaveEletronicaNfe{
    uf: UFEstado;
    aamm: string;
    cnpj: string;
    modelo: string;
    serie: string;
    numeroNota: string;
    formaEmissao: string;
    codigoNumerico: string;
}