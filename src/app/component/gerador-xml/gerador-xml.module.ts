import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeradorXmlRoutingModule } from './gerador-xml-routing.module';
import { GeradorXmlComponent } from './gerador-xml.component';
import { FormEmitenteComponent } from './form-emitente/form-emitente.component';
import { FormDestinatarioComponent } from './form-destinatario/form-destinatario.component';

import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    GeradorXmlComponent,
    FormEmitenteComponent,
    FormDestinatarioComponent
  ],
  imports: [
    CommonModule,
    GeradorXmlRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class GeradorXmlModule { }
