import { Component } from '@angular/core';
import { EmitenteDestinatario } from 'src/app/models/emitenteDestinatario';
import { DataXmlTagService } from 'src/app/service/data-xml-tag.service';

@Component({
  selector: 'app-xml-tags',
  templateUrl: './xml-tags.component.html',
  styleUrls: ['./xml-tags.component.css']
})
export class XmlTagsComponent {

  constructor(private _dataXmlTagService: DataXmlTagService){
    this.dadosEmitente = this._dataXmlTagService.getDadosEmitente(), 
    this.dadosDestinatario = this._dataXmlTagService.getDadosDestinatario(),
    this.print();
  }

  dadosEmitente= {}
  dadosDestinatario= {}

  print(){
    console.log (this.dadosDestinatario, this.dadosEmitente);
  }

}
