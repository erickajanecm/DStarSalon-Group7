import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'userhomepage',
    loadChildren: () => import('./user/userhomepage/userhomepage.module').then( m => m.UserhomepagePageModule)
  },
  {
    path: 'userprofile',
    loadChildren: () => import('./user/userprofile/userprofile.module').then( m => m.UserprofilePageModule)
  },
  {
    path: 'userappointment',
    loadChildren: () => import('./user/userappointment/userappointment.module').then( m => m.UserappointmentPageModule),
  },
  {
    path: 'userlogin',
    loadChildren: () => import('./pages/userlogin/userlogin.module').then( m => m.UserloginPageModule)
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./admin/adminhome/adminhome.module').then( m => m.AdminhomePageModule)
  },
  {
    path: 'adminhomepage',
    loadChildren: () => import('./admin/adminhomepage/adminhomepage.module').then( m => m.AdminhomepagePageModule)
  },
  {
    path: 'adminschedule',
    loadChildren: () => import('./admin/adminschedule/adminschedule.module').then( m => m.AdminschedulePageModule)
  },
  {
    path: 'adminappoint',
    loadChildren: () => import('./admin/adminappoint/adminappoint.module').then( m => m.AdminappointPageModule)
  },
  {
    path: 'adminservices',
    loadChildren: () => import('./admin/adminservices/adminservices.module').then( m => m.AdminservicesPageModule)
  },
  {
    path: 'adminsettings',
    loadChildren: () => import('./admin/adminsettings/adminsettings.module').then( m => m.AdminsettingsPageModule)
  },
  {
    path: 'usersignup',
    loadChildren: () => import('./pages/usersignup/usersignup.module').then( m => m.UsersignupPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
