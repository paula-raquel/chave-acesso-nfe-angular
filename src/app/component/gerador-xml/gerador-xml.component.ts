import { Component, OnChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { ConsultaCepService } from 'src/app/service/consulta-cep.service';

@Component({
  selector: 'app-gerador-xml',
  templateUrl: './gerador-xml.component.html',
  styleUrls: ['./gerador-xml.component.css']
})
export class GeradorXmlComponent{
  constructor(
    private _formBuilder: FormBuilder,
    private cepService: ConsultaCepService
    ) { }

  isLinear = true;
  isFormEmitenteValido = false;
  isFormDestinatarioValido = false;
  
  dadosEmitente = '';
  dadosDestinatario ='';
  
  setStatusForm(evento: any){
    this.isFormEmitenteValido = evento;
  }

  setDadosEmitente (evento: any){
    this.dadosEmitente = evento.formDadosEmitente.value;
  }

  setDadosDestinatario (value: any){
    this.dadosDestinatario = value.formDadosDestinatario.value;
    console.log(this.dadosDestinatario)
  }



}
