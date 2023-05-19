import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaCepService } from 'src/app/service/consulta-cep.service';

@Component({
  selector: 'app-gerador-xml',
  templateUrl: './gerador-xml.component.html',
  styleUrls: ['./gerador-xml.component.css']
})
export class GeradorXmlComponent {
  constructor(
    private _formBuilder: FormBuilder,
    private cepService: ConsultaCepService
    ) { }

  isLinear = true;
  formEmitente = FormGroup;
  dadosEmitente ='';
  dadosDestinatario ='';

  setDadosEmitente (value: any){
    this.dadosEmitente = value.formDadosEmitente.value;
    console.log(this.dadosEmitente)
  }

  setDadosDestinatario (value: any){
    this.dadosDestinatario = value.formDadosDestinatario.value;
    console.log(this.dadosDestinatario)
  }



}
