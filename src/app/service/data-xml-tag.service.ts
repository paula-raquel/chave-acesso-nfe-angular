import { Injectable } from '@angular/core';
import { EmitenteDestinatario } from '../models/emitenteDestinatario';

@Injectable({
  providedIn: 'root'
})
export class DataXmlTagService {

  constructor() { }

  private dadosEmitente = {};
  private dadosDestinatario = {};

  setDadosEmitente(v :EmitenteDestinatario){
    this.dadosEmitente = v;
  }

  getDadosEmitente(){
    return this.dadosEmitente;
  }

  setDadosDestinatario(v :EmitenteDestinatario){
    this.dadosDestinatario = v;
  }

  getDadosDestinatario(){
    return this.dadosDestinatario;
  }
  

}
