import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormChaveComponent } from './app/component/form-chave/form-chave.component';

@NgModule({
  declarations: [
    AppComponent,
    FormChaveComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
