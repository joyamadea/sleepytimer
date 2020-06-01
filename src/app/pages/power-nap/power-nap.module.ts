import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PowerNapPageRoutingModule } from './power-nap-routing.module';

import { PowerNapPage } from './power-nap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PowerNapPageRoutingModule
  ],
  declarations: [PowerNapPage]
})
export class PowerNapPageModule {}
