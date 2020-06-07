import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NameSettingsPageRoutingModule } from './name-settings-routing.module';

import { NameSettingsPage } from './name-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NameSettingsPageRoutingModule
  ],
  declarations: [NameSettingsPage]
})
export class NameSettingsPageModule {}
