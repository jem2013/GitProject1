import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JennaFirstPageRoutingModule } from './jenna-first-routing.module';

import { JennaFirstPage } from './jenna-first.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JennaFirstPageRoutingModule
  ],
  declarations: [JennaFirstPage]
})
export class JennaFirstPageModule {}
