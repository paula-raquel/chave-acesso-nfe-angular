import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormChaveComponent } from './form-chave.component';

const routes: Routes = [
  { path: '', component: FormChaveComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormChaveRoutingModule { }
