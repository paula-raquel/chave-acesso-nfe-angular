import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormChaveModule } from '../form-chave/form-chave.module';
import { GeradorXmlModule } from '../gerador-xml/gerador-xml.module';
import { XmlTagsModule } from '../xml-tags/xml-tags.module';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'gerador-chave', loadChildren: () => import('../form-chave/form-chave.module').then((m) => FormChaveModule) },
      { path: 'gerador-xml', loadChildren: () => import('../gerador-xml/gerador-xml.module').then((m) => GeradorXmlModule)},
      { path: 'xml-tags', loadChildren: () => import ('../xml-tags/xml-tags.module').then((m)=> XmlTagsModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
