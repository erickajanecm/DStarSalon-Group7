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
    path: 'userappointment',
    loadChildren: () => import('./user/userappointment/userappointment.module').then( m => m.UserappointmentPageModule),
  },
  {
    path: 'edit-appt',
    loadChildren: () => import('./user/edit-appt/edit-appt.module').then( m => m.EditApptPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
