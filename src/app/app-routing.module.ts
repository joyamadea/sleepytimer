import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sleep-now',
    loadChildren: () => import('./pages/sleep-now/sleep-now.module').then( m => m.SleepNowPageModule)
  },
  {
    path: 'wake-up',
    loadChildren: () => import('./pages/wake-up/wake-up.module').then( m => m.WakeUpPageModule)
  },
  {
    path: 'power-nap',
    loadChildren: () => import('./pages/power-nap/power-nap.module').then( m => m.PowerNapPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
