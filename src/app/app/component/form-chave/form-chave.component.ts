import { Component, OnInit } from '@angular/core';
import { ChaveEletronicaNfe } from 'src/app/models/chave';
import { Estado } from 'src/app/models/estado';
import { DataserviceService } from 'src/app/service/dataservice.service';


@Component({
  selector: 'app-form-chave',
  templateUrl: './form-chave.component.html',
  styleUrls: ['./form-chave.component.css']
})
export class FormChaveComponent implements OnInit {

  ufs = this.dataService.getEstado();

  dadosChaveAcesso: ChaveEletronicaNfe = {
    uf: "",
    aamm: "",
    cnpj: "",
    modelo: "",
    serie: "",
    numeroNota: "",
    formaEmissao: "",
    codigoNumerico: "",
  };

  constructor(private dataService:DataserviceService) {
  }

  ngOnInit(): void {
    console.log(this.ufs);

  }



}
