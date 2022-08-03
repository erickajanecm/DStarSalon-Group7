import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminappointPage } from './adminappoint.page';

const routes: Routes = [
  {
    path: '',
    component: AdminappointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminappointPageRoutingModule {}
