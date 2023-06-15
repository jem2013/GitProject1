import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LincolnPageRoutingModule } from './lincoln-routing.module';

import { LincolnPage } from './lincoln.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LincolnPageRoutingModule
  ],
  declarations: [LincolnPage]
})
export class LincolnPageModule {}
