import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserhomeappointmentPage } from './userhomeappointment.page';

const routes: Routes = [
  {
    path: '',
    component: UserhomeappointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserhomeappointmentPageRoutingModule {}
