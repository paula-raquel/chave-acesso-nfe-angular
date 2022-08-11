import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormChaveComponent } from './component/form-chave/form-chave.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule }  from '@angular/cdk/clipboard';


@NgModule({
  declarations: [
    AppComponent,
    FormChaveComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
