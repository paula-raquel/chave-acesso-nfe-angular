import { Component, OnInit } from '@angular/core';
import { ChaveEletronicaNfe, UFEstado } from 'src/app/models/chave';


@Component({
  selector: 'app-form-chave',
  templateUrl: './form-chave.component.html',
  styleUrls: ['./form-chave.component.css']
})
export class FormChaveComponent implements OnInit {

  ufs = Object.values(UFEstado);

  dadosChaveAcesso: ChaveEletronicaNfe = {
    uf: 35,
    aamm: "",
    cnpj: "",
    modelo: "",
    serie: "",
    numeroNota: "",
    formaEmissao: "",
    codigoNumerico: "",
  };

  constructor() { }

  ngOnInit(): void {

    console.log(this.dadosChaveAcesso);

  }



}
