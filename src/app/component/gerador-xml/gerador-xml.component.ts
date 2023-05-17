import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  cepNaoConsultado = true;

  searchCep = false;
  isLinear = false;

  consultarCep() {
    let value = this.formEnderecoEmitente.get('cep')?.value;
    if (value !== '' && value != null && value?.length == 8) {
      this.cepService.consultaCep(value).subscribe({
        next: data => {
          this.formEnderecoEmitente.patchValue({
            logradouro: data.logradouro,
            complemento: data.complemento,
            bairro: data.bairro,
            estado: data.uf,
            municipio: data.localidade
          });
        },
        complete: () => {
          this.formEnderecoEmitente.controls.logradouro.enable();
          this.formEnderecoEmitente.controls.numero.enable();
          this.formEnderecoEmitente.controls.complemento.enable();
          this.formEnderecoEmitente.controls.bairro.enable();
          this.formEnderecoEmitente.controls.estado.enable();
          this.formEnderecoEmitente.controls.municipio.enable();
        }

      });
    }

  }

  setNomeFantasiaEmitentePessoaFisica() {
    let value = this.formDadosEmitente.get('tipoPessoa')?.value;
    let valueRazaoSocial = this.formDadosEmitente.get('razaoSocial')?.value;
    if (value == 'FISICA') {
      this.formDadosEmitente.patchValue({
        nomeFantasia: valueRazaoSocial,
      });          
    }

  }


  formDadosEmitente = this._formBuilder.group({
    tipoPessoa: ['JURIDICA', Validators.required],
    crt: [{ value: '3', disabled: "true" }, Validators.required],
    cpfCnpj: ['', Validators.required],
    ie: ['', Validators.required],
    razaoSocial: ['', Validators.required],
    nomeFantasia: ['', Validators.required],
  });

  formEnderecoEmitente = this._formBuilder.group({
    cep: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
    logradouro: [{ value: '', disabled: this.cepNaoConsultado }, Validators.required],
    numero: [{ value: '', disabled: this.cepNaoConsultado }],
    complemento: [{ value: '', disabled: this.cepNaoConsultado }],
    bairro: [{ value: '', disabled: this.cepNaoConsultado }, Validators.required],
    municipio: [{ value: 'São Paulo', disabled: this.cepNaoConsultado }, Validators.required],
    estado: [{ value: 'SP', disabled: this.cepNaoConsultado }, Validators.required],
  });



  thirdFormGroupContato = this._formBuilder.group({
    tipoContato: ['WHATSAPP', Validators.required],
    descricao: ['', Validators.required],
    contato: ['', Validators.required],
  });




}
