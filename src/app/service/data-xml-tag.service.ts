import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataXmlTagService {

  constructor() { }

  private dadosEmitente = {};
  private dadosDestinatario = {};

  setDadosEmitente(v :any){
    this.dadosEmitente = v;
  }

  getDadosEmitente(){
    return this.dadosEmitente;
  }

  setDadosDestinatario(v :any){
    this.dadosDestinatario = v;
  }

  getDadosDestinatario(){
    return this.dadosDestinatario;
  }
  

}
