import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WakeUpPage } from './wake-up.page';

const routes: Routes = [
  {
    path: '',
    component: WakeUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WakeUpPageRoutingModule {}
