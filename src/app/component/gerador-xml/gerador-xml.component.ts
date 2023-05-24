import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { EmitenteDestinatario } from 'src/app/models/emitenteDestinatario';
import { ConsultaCepService } from 'src/app/service/consulta-cep.service';
import { DataXmlTagService } from 'src/app/service/data-xml-tag.service';

@Component({
  selector: 'app-gerador-xml',
  templateUrl: './gerador-xml.component.html',
  styleUrls: ['./gerador-xml.component.css']
})
export class GeradorXmlComponent{
  constructor(
    private _dataXmlTagService: DataXmlTagService,
    private route: Router
    ) { }

  isLinear = true;
  isFormEmitenteValido = false;
  isFormDestinatarioValido = false;
  
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
  
  setStatusFormEmitente(evento: any){
    this.isFormEmitenteValido = evento;
  }

  setStatusFormDestinatario(evento: any){
    this.isFormDestinatarioValido = evento;
  }

  setDadosEmitente (evento: any){
    this.dadosEmitente = evento.formDadosEmitente.value;
  }

  setDadosDestinatario (value: any){
    this.dadosDestinatario = value.formDadosDestinatario.value;
  }

  salvarXML(){
    this._dataXmlTagService.setDadosEmitente(this.dadosEmitente);
    this._dataXmlTagService.setDadosDestinatario(this.dadosDestinatario);
    this.route.navigateByUrl('home/xml-tags');
  }


}
