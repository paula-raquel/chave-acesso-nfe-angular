import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import DataUFService from 'src/app/service/dataservice.service';


@Component({
  selector: 'app-form-chave',
  templateUrl: './form-chave.component.html',
  styleUrls: ['./form-chave.component.css']
})

export class FormChaveComponent implements OnInit {

  ufs = this.dataService.getEstado();
  chaveAcesso44 = '';
  chaveAcesso43 = '';
  digitoVerificador = '0';
  aamm = '';

  formulario!: FormGroup;

  constructor(
    private dataService:DataUFService, private formBuilder:FormBuilder) {
  }


  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      uf: ['35'],
      emissao: ['',[Validators.required]],
      cnpj: ['',[Validators.minLength(14), Validators.maxLength(14), Validators.required]],
      modelo: [{value: '55', disabled: false}],
      serie: ['',[Validators.required]],
      numeroNF: ['', [Validators.required]],
      formaEmissao: [{value:'1', disabled:true}],
      codigoNumerico: [{value:'12345678', disabled:true}],
    })

    //   this.formulario.controls['modelo'].disable();


  }

  getDataForm():void{
    this.formatadorData(this.formulario.value.emissao);
    this.formatadorSerie(this.formulario.value.serie);
    this.formatadorNumeroNotaFiscal(this.formulario.value.numeroNF);
    this.geradorChave43();
    this.digitoVerificador = this.geradorDigitoVerificador(this.chaveAcesso43);
    this.geradorChave44();
  }

  geradorChave44(){
    this.chaveAcesso44 = this.chaveAcesso43 + this.digitoVerificador;
  }

  geradorDigitoVerificador(chave43:string):string{

    var indice = 0;
    var multiplicador = 4
    var somaPoderada = 0;
    var restoDivisao = 0;
    var digitoVerificadorCalculado = 0;
    
    while(indice < 43){

      if(multiplicador < 2){
        multiplicador = 9
      }

      if(multiplicador >= 2 && multiplicador <=9){
        somaPoderada += Number(chave43[indice]) * Number(multiplicador);
      }
        indice++;
        multiplicador--;
    }

    restoDivisao = somaPoderada % 11;

    if(restoDivisao == 0 || restoDivisao == 1 ){
      digitoVerificadorCalculado = 0;
    }else{
      digitoVerificadorCalculado = 11 - restoDivisao;
    }

    return String(digitoVerificadorCalculado)

  }

  geradorChave43(){
    this.chaveAcesso43 = this.formulario.value.uf + this.aamm + this.formulario.value.cnpj + this.formulario.get('modelo')?.value 
                          + this.formulario.value.serie + this.formulario.value.numeroNF + this.formulario.get('formaEmissao')?.value
                           + this.formulario.get('codigoNumerico')?.value;

  }

  formatadorData(data:string):void{
    var ano = data.slice(2,4);
    var mes = data.slice(5,7);
    this.aamm = ano + mes
  }

  formatadorSerie(value:string){
    this.formulario.get('serie')?.setValue(this.adicionarZeros(value, 3));
  }

  formatadorNumeroNotaFiscal(value:string){
    this.formulario.get('numeroNF')?.setValue(this.adicionarZeros(value, 9));
  }

  adicionarZeros(num:string, length:number) {
    var numeroComZero = String(num);
    var contador = numeroComZero.length;
      
    while(contador < length) {
      numeroComZero = "0" + numeroComZero;
      contador++;
    }
    return numeroComZero;
  }


}
