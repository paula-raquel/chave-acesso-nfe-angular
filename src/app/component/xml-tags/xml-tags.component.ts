import { Component } from '@angular/core';
import { EmitenteDestinatario } from 'src/app/models/emitenteDestinatario';
import { DataXmlTagService } from 'src/app/service/data-xml-tag.service';

@Component({
  selector: 'app-xml-tags',
  templateUrl: './xml-tags.component.html',
  styleUrls: ['./xml-tags.component.css']
})
export class XmlTagsComponent {

  constructor(private _dataXmlTagService: DataXmlTagService){
    this.dadosEmitente = this._dataXmlTagService.getDadosEmitente(), 
    this.dadosDestinatario = this._dataXmlTagService.getDadosDestinatario(),
    this.print();
  }

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


  print(){
    console.log (this.dadosDestinatario, this.dadosEmitente);
  }

}
