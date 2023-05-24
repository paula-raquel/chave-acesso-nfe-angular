import { Injectable } from '@angular/core';
import { EmitenteDestinatario } from '../models/emitenteDestinatario';

@Injectable({
  providedIn: 'root'
})
export class DataXmlTagService {

  constructor() { }

  dadosEmitente : EmitenteDestinatario = {
    tipoPessoa: '',
    crt: 3,
    cpfCnpj: 0,
    ie: 0,
    razaoSocial: '',
    nomeFantasia: '',
    endereco: {
      cep: 0,
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      municipio: 'SP',
      estado: 'São Paulo'
    }
  };

  dadosDestinatario : EmitenteDestinatario = {
    tipoPessoa: '',
    crt: 3,
    cpfCnpj: 0,
    ie: 0,
    razaoSocial: '',
    nomeFantasia: '',
    endereco: {
      cep: 0,
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      municipio: 'SP',
      estado: 'São Paulo'
    }
  };


  setDadosEmitente(v :EmitenteDestinatario){
    this.dadosEmitente = v;
  }

  getDadosEmitente(): EmitenteDestinatario{
    return this.dadosEmitente;
  }

  setDadosDestinatario(v :EmitenteDestinatario){
    this.dadosDestinatario = v;
  }

  getDadosDestinatario() : EmitenteDestinatario{
    return this.dadosDestinatario;
  }
  

}
