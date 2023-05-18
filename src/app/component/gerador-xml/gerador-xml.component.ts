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


  formDadosEmitente = '';
  onFormGroupChangeEvent( _event:any){
    this.formDadosEmitente = _event;
  }

  print (value: any){
    console.log(value.formDadosEmitente.status)
  }



  thirdFormGroupContato = this._formBuilder.group({
    tipoContato: ['WHATSAPP', Validators.required],
    descricao: ['', Validators.required],
    contato: ['', Validators.required],
  });




}
