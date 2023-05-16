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
    let value = this.secondFormGroupEndereco.get('cep')?.value;

    if (value !== '' && value != null && value?.length == 8) {
      this.cepService.consultaCep(value).subscribe({
        next: data => {
          this.secondFormGroupEndereco.patchValue({
            logradouro: data.logradouro,
            complemento: data.complemento,
            bairro: data.bairro,
            estado: data.uf,
            municipio: data.localidade
          });
        },
        complete: () => {
          this.secondFormGroupEndereco.controls.logradouro.enable();
          this.secondFormGroupEndereco.controls.numero.enable();
          this.secondFormGroupEndereco.controls.complemento.enable();
          this.secondFormGroupEndereco.controls.bairro.enable();
          this.secondFormGroupEndereco.controls.estado.enable();
          this.secondFormGroupEndereco.controls.municipio.enable();
        }

      });
    }

  }

  firstFormDadosPessoais = this._formBuilder.group({
    tipoPessoa: ['JURIDICA', Validators.required],
    cpfCnpj: ['', Validators.required],
    razaoSocial: ['', Validators.required],
    nomeFantasia: ['', Validators.required],
    siglaApelido: ['', Validators.required],
  });

  secondFormGroupEndereco = this._formBuilder.group({
    tipoEndereco: [{ value: 'RESIDENCIAL' }, Validators.required],
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
