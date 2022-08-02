import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'userhomepage',
        children:[
          {
            path:'',
            loadChildren: () => import('../user/userhomepage/userhomepage.module').then( m => m.UserhomepagePageModule)
          }
        ]
      },
      {
        path:'schedules',
        children:[
          {
            path:'',
            loadChildren: () => import('../user/schedules/schedules.module').then( m => m.SchedulesPageModule)
          }
        ]
      },
      {
        path:'userprofile',
        children:[
          {
            path:'',
            loadChildren: () => import('../user/userprofile/userprofile.module').then( m => m.UserprofilePageModule)
          }
        ]
      },
      {
        path:'userappointment',
        children:[
          {
            path:'',
            loadChildren: () => import('../user/userappointment/userappointment.module').then( m => m.UserappointmentPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'userhomepage',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
