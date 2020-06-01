import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepNowPage } from './sleep-now.page';

const routes: Routes = [
  {
    path: '',
    component: SleepNowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepNowPageRoutingModule {}
