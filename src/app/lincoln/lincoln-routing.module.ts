import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LincolnPage } from './lincoln.page';

const routes: Routes = [
  {
    path: '',
    component: LincolnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LincolnPageRoutingModule {}
