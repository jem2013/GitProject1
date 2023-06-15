import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NEHomepagePage } from './nehomepage.page';

const routes: Routes = [
  {
    path: '',
    component: NEHomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NEHomepagePageRoutingModule {}
