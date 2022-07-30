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
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
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
    path: 'userappoint',
    loadChildren: () => import('./user/userappoint/userappoint.module').then( m => m.UserappointPageModule)
  },
  {
    path: 'make-appointment',
    loadChildren: () => import('./user/make-appointment/make-appointment.module').then( m => m.MakeAppointmentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
