import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NameSettingsPage } from './name-settings.page';

const routes: Routes = [
  {
    path: '',
    component: NameSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NameSettingsPageRoutingModule {}
