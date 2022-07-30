import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserappointmentPage } from './userappointment.page';

const routes: Routes = [
 {path: '',
  component: UserappointmentPage,
  children:[
      {
        path:'make-appointment',
        children:[
          {
            path:'',
            loadChildren: () => import('src/app/user/make-appointment/make-appointment.module').
            then( m => m.MakeAppointmentPageModule)
          }
        ]
      },
      {
        path:'edit-appointment',
        children:[
          {
            path:'',
            loadChildren: () => import('src/app/user/edit-appointment/edit-appointment.module').then( m => m.EditAppointmentPageModule)
          }
        ]
      },
      {
        path:'userhomeappointment',
        children:[
          {
            path:'',
            loadChildren: () => import('src/app/user/userhomeappointment/userhomeappointment.module').
            then( m => m.UserhomeappointmentPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'userhomeappointment',
        pathMatch: 'full'
      }
 ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserappointmentPageRoutingModule {}
