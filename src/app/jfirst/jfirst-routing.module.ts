import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JfirstPage } from './jfirst.page';

const routes: Routes = [
  {
    path: '',
    component: JfirstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JfirstPageRoutingModule {}
