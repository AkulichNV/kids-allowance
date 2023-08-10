import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticPageComponent } from './statistic-page.component';

const routes: Routes = [{ path: '', component: StatisticPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticPageRoutingModule { }
