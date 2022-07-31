import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditApptPage } from './edit-appt.page';

const routes: Routes = [
  {
    path: '',
    component: EditApptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditApptPageRoutingModule {}
