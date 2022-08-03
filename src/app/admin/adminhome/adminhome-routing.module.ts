import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminhomePage } from './adminhome.page';

const routes: Routes = [
  {
    path: '',
    component: AdminhomePage,
    children:[
      {
        path:'adminhomepage',
        children:[
          {
            path:'',
            loadChildren: () => import('src/app/admin/adminhomepage/adminhomepage.module').then( m => m.AdminhomepagePageModule)
          }
        ]
      },
      {
        path:'adminservices',
        children:[
          {
            path:'',
            loadChildren: () => import('src/app/admin/adminservices/adminservices.module').then( m => m.AdminservicesPageModule)
          }
        ]
      },
      {
        path:'adminschedule',
        children:[
          {
            path:'',
            loadChildren: () => import('src/app/admin/adminschedule/adminschedule.module').then( m => m.AdminschedulePageModule)
          }
        ]
      },
      {
        path:'adminappoint',
        children:[
          {
            path:'',
            loadChildren: () => import('src/app/admin/adminappoint/adminappoint.module').then( m => m.AdminappointPageModule)
          }
        ]
      },
      {
        path:'adminsettings',
        children:[
          {
            path:'',
            loadChildren: () => import('src/app/admin/adminsettings/adminsettings.module').then( m => m.AdminsettingsPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'adminhomepage',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminhomePageRoutingModule {}
