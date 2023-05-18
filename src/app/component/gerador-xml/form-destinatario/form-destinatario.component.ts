import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaCepService } from 'src/app/service/consulta-cep.service';

@Component({
  selector: 'app-form-destinatario',
  templateUrl: './form-destinatario.component.html',
  styleUrls: ['./form-destinatario.component.css']
})
export class FormDestinatarioComponent {

  constructor(
    private _formBuilder: FormBuilder,
    private cepService: ConsultaCepService
  ) { }

  cepNaoConsultado = true;

  consultarCep() {
    let value = this.formDadosDestinatario.get('endereco.cep')?.value;
    let controls = this.formDadosDestinatario.controls.endereco.controls
    if (value !== '' && value != null && value?.length == 8) {
      this.cepService.consultaCep(value).subscribe({
        next: data => {
          this.formDadosDestinatario.patchValue({
            endereco: {
              logradouro: data.logradouro,
              complemento: data.complemento,
              bairro: data.bairro,
              estado: data.uf,
              municipio: data.localidade
            }
          });
        },
        complete: () => {
          controls.logradouro.enable();
          controls.numero.enable();
          controls.complemento.enable();
          controls.bairro.enable();
          controls.estado.enable();
          controls.municipio.enable();
        }
      });
    }
  }

  isPessoaJuridica() {
    return this.formDadosDestinatario.get('tipoPessoa')?.value === 'JURIDICA';
  }

  setNomeFantasiaEmitentePessoaFisica() {
    let value = this.formDadosDestinatario.get('tipoPessoa')?.value;
    let valueRazaoSocial = this.formDadosDestinatario.get('razaoSocial')?.value;
    if (value == 'FISICA') {
      this.formDadosDestinatario.patchValue({
        nomeFantasia: valueRazaoSocial,
      });
    }

  }

  formDadosDestinatario = this._formBuilder.group({
    tipoPessoa: ['JURIDICA', Validators.required],
    cpfCnpj: ['', Validators.required],
    ie: ['', Validators.required],
    razaoSocial: ['', Validators.required],
    nomeFantasia: ['', Validators.required],
    endereco: this._formBuilder.group({
      cep: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      logradouro: [{ value: '', disabled: this.cepNaoConsultado }, Validators.required],
      numero: [{ value: '', disabled: this.cepNaoConsultado }],
      complemento: [{ value: '', disabled: this.cepNaoConsultado }],
      bairro: [{ value: '', disabled: this.cepNaoConsultado }, Validators.required],
      municipio: [{ value: 'São Paulo', disabled: this.cepNaoConsultado }, Validators.required],
      estado: [{ value: 'SP', disabled: this.cepNaoConsultado }, Validators.required],
    })
  });

}
