import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';


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
  
  uf='35';
  emissao= '';
  cnpj='';
  modelo = '55';
  serie='';
  numeroNF='';
  formaEmissao = '1';
  codigoNumerico = '12345678';
  aamm='';

  constructor(
    private dataService:DataserviceService, 
    ) {}

  getDataForm():void{
    this.formatadorData(this.emissao);
    this.formatadorSerie(this.serie);
    this.formatadorNumeroNotaFiscal(this.numeroNF);
    this.geradorChave43();
    this.digitoVerificador = this.geradorDigitoVerificador(this.chaveAcesso43);
    this.geradorChave44();
  }

  geradorChave44(){
    this.chaveAcesso44 = this.chaveAcesso43 + this.digitoVerificador;
    console.log(this.chaveAcesso44);
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
    this.chaveAcesso43 = this.uf + this.aamm + this.cnpj + this.modelo 
                          + this.serie + this.numeroNF + this.formaEmissao + this.codigoNumerico;
  }

  formatadorData(data:string):void{
    var ano = data.slice(2,4);
    var mes = data.slice(5,7);
    this.aamm = ano + mes
  }

  formatadorSerie(value:string){
    this.serie = this.adicionarZeros(value, 3);
  }

  formatadorNumeroNotaFiscal(value:string){
    this.numeroNF = this.adicionarZeros(value, 9);
  }

  adicionarZeros(num:string, len:number) {
    var numeroComZero = String(num);
    var contador = numeroComZero.length;
      
    while(contador < len) {
      numeroComZero = "0" + numeroComZero;
      contador++;
    }
    return numeroComZero;
  }

  ngOnInit(): void {
  }

}
