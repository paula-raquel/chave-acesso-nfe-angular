import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeradorXmlComponent } from './gerador-xml.component';

const routes: Routes = [
  { path: '', component: GeradorXmlComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeradorXmlRoutingModule { }
