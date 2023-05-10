import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './component/home/home.module';

const APP_ROUTES: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: "full" },
      { path: 'home', loadChildren: () => import('./component/home/home.module').then((m) => HomeModule) }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
