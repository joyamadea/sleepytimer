import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';
import { ChangeNamePage } from './change-name/change-name.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'change-name',
    component: ChangeNamePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
