import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormChaveModule } from '../form-chave/form-chave.module';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'gerador-chave', loadChildren: () => import('../form-chave/form-chave.module').then((m) => FormChaveModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
