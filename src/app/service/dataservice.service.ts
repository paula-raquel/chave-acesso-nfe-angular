import { Injectable } from '@angular/core';
import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  getEstado():Estado[]{
    return [
      {codigoIBGE:35, nome:"São Paulo", uf: "SP", regiao:"Sudeste"},
      {codigoIBGE: 11, nome:"Rondônia", uf: "RO", regiao:"Norte"},
      {codigoIBGE:12, nome:"Amazonas", uf:"AC", regiao:"Norte"},
      {codigoIBGE:13, nome:"Acre",  uf: "AM", regiao:"Norte"},
      {codigoIBGE:14, nome:"Roraima",  uf: "RR", regiao:"Norte"},
      {codigoIBGE:15, nome:"Pará",  uf: "PA", regiao:"Norte"},
      {codigoIBGE:16, nome:"Amapá",  uf: "AP", regiao:"Norte"},
      {codigoIBGE:17, nome:"Tocantins",  uf:"TO", regiao:"Norte"},
      {codigoIBGE:21, nome:"Maranhão",  uf:"MA", regiao:"Nordeste"},
      {codigoIBGE:22, nome:"Piauí", uf:"PI", regiao:"Nordeste"},
      {codigoIBGE:23, nome:"Ceará",  uf:"CE", regiao:"Nordeste"},
      {codigoIBGE:24, nome:"Rio Grande do Norte",  uf:"RN", regiao: "Nordeste"},
      {codigoIBGE:25, nome:"Paraíba",  uf:"PB", regiao:"Nordeste"},
      {codigoIBGE:26, nome:"Pernambuco", uf: "PE", regiao:"Nordeste"},
      {codigoIBGE:27, nome:"Alagoas",  uf:"AL", regiao:"Nordeste"},
      {codigoIBGE:28, nome:"Sergipe",  uf:"SE", regiao:"Nordeste"},
      {codigoIBGE:29, nome:"Bahia",  uf:"BA", regiao:"Nordeste"},
      {codigoIBGE:31, nome:"Minas Gerais",  uf:"MG", regiao:"Sudeste"},
      {codigoIBGE:32, nome:"Espírito Santo", uf:"ES", regiao:"Sudeste"},
      {codigoIBGE:33, nome:"Rio de Janeiro",  uf:"RJ", regiao:"Sudeste"},
      {codigoIBGE:41, nome:"Paraná",  uf:"PR", regiao:"Sul"},
      {codigoIBGE:42, nome:"Santa Catarina",  uf:"SC", regiao:"Sul"},
      {codigoIBGE:43, nome:"Rio Grande do Sul", uf: "RS", regiao:"Sul"},
      {codigoIBGE:50, nome:"Mato Grosso do Sul", uf: "MS", regiao:"Centro-Oeste"},
      {codigoIBGE:51, nome:"Mato Grosso", uf: "MT", regiao:"Centro-Oeste"},
      {codigoIBGE:52, nome:"Goiás",  uf:"GO", regiao:"Centro-Oeste"},
      {codigoIBGE:53, nome:"Distrito Federal", uf: "DF", regiao:"Centro-Oeste"}
    ]
  }
}
