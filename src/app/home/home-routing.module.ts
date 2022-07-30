import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'homepage',
        children:[
          {
            path:'',
            loadChildren: () => import('../user/userhomepage/userhomepage.module').then( m => m.UserhomepagePageModule)
          }
        ]
      },
      {
        path:'profile',
        children:[
          {
            path:'',
            loadChildren: () => import('../user/userprofile/userprofile.module').then( m => m.UserprofilePageModule)
          }
        ]
      },
      {
        path:'appointments',
        children:[
          {
            path:'',
            loadChildren: () => import('../user/userappoint/userappoint.module').then( m => m.UserappointPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'homepage',
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
