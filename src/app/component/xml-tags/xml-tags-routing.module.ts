import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XmlTagsComponent } from './xml-tags.component';

const routes: Routes = [
  { path: '', component: XmlTagsComponent }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XmlTagsRoutingModule { }
