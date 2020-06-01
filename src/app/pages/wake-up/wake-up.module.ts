import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WakeUpPageRoutingModule } from './wake-up-routing.module';

import { WakeUpPage } from './wake-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WakeUpPageRoutingModule
  ],
  declarations: [WakeUpPage]
})
export class WakeUpPageModule {}
