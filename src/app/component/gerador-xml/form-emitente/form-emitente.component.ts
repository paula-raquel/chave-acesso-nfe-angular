import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Estado } from 'src/app/models/estado';
import { ConsultaCepService } from 'src/app/service/consulta-cep.service';
import DataUFService from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-form-emitente',
  templateUrl: './form-emitente.component.html',
  styleUrls: ['./form-emitente.component.css']
})
export class FormEmitenteComponent {
   
  ufs: Estado[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private cepService: ConsultaCepService,
    private dataUfService: DataUFService
  ) { 
    this.ufs = this.dataUfService.getEstado();
  }

  cepNaoConsultado = true;

  formDadosEmitente = this._formBuilder.group({
    tipoPessoa: ['JURIDICA', Validators.required],
    crt: [{ value: '3', disabled: "true" }, Validators.required],
    cpfCnpj: ['', Validators.required],
    ie: [''],
    razaoSocial: ['', Validators.required],
    nomeFantasia: ['', Validators.required],
    endereco: this._formBuilder.group({
      cep: ['', [Validators.required, Validators.pattern('[0-9]+$'), Validators.minLength(8), Validators.maxLength(8)]],
      logradouro: [{ value: '', disabled: this.cepNaoConsultado }, Validators.required],
      numero: [{ value: '', disabled: this.cepNaoConsultado }],
      complemento: [{ value: '', disabled: this.cepNaoConsultado }],
      bairro: [{ value: '', disabled: this.cepNaoConsultado }, Validators.required],
      municipio: [{ value: '', disabled: this.cepNaoConsultado }, Validators.required],
      estado: [{ value: '', disabled: this.cepNaoConsultado }, Validators.required],
    })
  });

  setNomeFantasiaEmitentePessoaFisica() {
    let value = this.formDadosEmitente.get('tipoPessoa')?.value;
    let valueRazaoSocial = this.formDadosEmitente.get('razaoSocial')?.value;
    if (value == 'FISICA') {
      this.formDadosEmitente.patchValue({
        nomeFantasia: valueRazaoSocial,
      });
    }
  }

  status = this.formDadosEmitente.statusChanges.subscribe((v) => {
    this.isFormValid();
  });

  @Output()
  statusForm = new EventEmitter<boolean>();

  isFormValid() {
    if (this.formDadosEmitente.status !== 'INVALID') {
      this.statusForm.emit(true);
    }
    else {
      this.statusForm.emit(false);
    }
  }

  consultarCep() {
    let value = this.formDadosEmitente.get('endereco.cep')?.value;
    let controls = this.formDadosEmitente.controls.endereco.controls
    if (value !== '' && value != null && value?.length === 8) {
      this.cepService.consultaCep(value).subscribe({
        next: data => {
          this.formDadosEmitente.patchValue({
            endereco: {
              logradouro: data.logradouro,
              complemento: data.complemento,
              bairro: data.bairro,
              estado: data.uf,
              municipio: data.localidade,
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

  tipoPessoa() {
    if (this.formDadosEmitente.get('tipoPessoa')?.value === 'FISICA') {
      this.formDadosEmitente.patchValue({
        ie: '',
      });
    }
  }

  isPessoaJuridica() {
    if (this.formDadosEmitente.get('tipoPessoa')?.value === 'JURIDICA') {
      return true;
    }
    return false;
  }


}
