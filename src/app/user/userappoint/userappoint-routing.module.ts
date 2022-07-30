import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserappointPage } from './userappoint.page';

const routes: Routes = [
  {
    path: '',
    component: UserappointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserappointPageRoutingModule {}
