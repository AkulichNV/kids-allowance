import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'main',  pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./core/pages/auth-page/auth-page.module').then(m => m.AuthPageModule) },
  { path: 'main', loadChildren: () => import('./core/pages/main-page/main-page.module').then(m => m.MainPageModule) },
  { path: 'statistic', loadChildren: () => import('./core/pages/statistic-page/statistic-page.module').then(m => m.StatisticPageModule) },
  { path: 'setting', loadChildren: () => import('./core/pages/setting-page/setting-page.module').then(m => m.SettingPageModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
