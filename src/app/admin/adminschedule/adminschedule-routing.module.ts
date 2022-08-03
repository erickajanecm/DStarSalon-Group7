import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminschedulePage } from './adminschedule.page';

const routes: Routes = [
  {
    path: '',
    component: AdminschedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminschedulePageRoutingModule {}
