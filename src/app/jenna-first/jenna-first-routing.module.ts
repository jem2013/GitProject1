import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JennaFirstPage } from './jenna-first.page';

const routes: Routes = [
  {
    path: '',
    component: JennaFirstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JennaFirstPageRoutingModule {}
