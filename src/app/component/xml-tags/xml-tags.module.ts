import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XmlTagsComponent } from './xml-tags.component';

import { XmlTagsRoutingModule } from './xml-tags-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    XmlTagsComponent
  ],
  imports: [
    CommonModule,
    XmlTagsRoutingModule,
    MatFormFieldModule
  ]
})
export class XmlTagsModule { }
