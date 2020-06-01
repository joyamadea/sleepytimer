import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepNowPageRoutingModule } from './sleep-now-routing.module';

import { SleepNowPage } from './sleep-now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepNowPageRoutingModule
  ],
  declarations: [SleepNowPage]
})
export class SleepNowPageModule {}
