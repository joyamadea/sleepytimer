import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PowerNapPage } from './power-nap.page';

const routes: Routes = [
  {
    path: '',
    component: PowerNapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PowerNapPageRoutingModule {}
