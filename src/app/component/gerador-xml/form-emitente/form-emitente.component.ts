import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaCepService } from 'src/app/service/consulta-cep.service';

@Component({
  selector: 'app-form-emitente',
  templateUrl: './form-emitente.component.html',
  styleUrls: ['./form-emitente.component.css']
})
export class FormEmitenteComponent {

  constructor(
    private _formBuilder: FormBuilder,
    private cepService: ConsultaCepService
  ) { }

  cepNaoConsultado = true;

  consultarCep() {
    let value = this.formDadosEmitente.get('endereco.cep')?.value;
    let controls = this.formDadosEmitente.controls.endereco.controls
    if (value !== '' && value != null && value?.length == 8) {
      this.cepService.consultaCep(value).subscribe({
        next: data => {
          this.formDadosEmitente.patchValue({
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
    return this.formDadosEmitente.get('tipoPessoa')?.value === 'JURIDICA';
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

  @Output()
  notify = new EventEmitter<FormGroup>()

  formDadosEmitente = this._formBuilder.group({
    tipoPessoa: ['JURIDICA', Validators.required],
    crt: [{ value: '3', disabled: "true" }, Validators.required],
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

  ngOnInit() {
    this.notify.emit(this.formDadosEmitente);
  }

}
