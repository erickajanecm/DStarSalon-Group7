import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersignupPageRoutingModule } from './usersignup-routing.module';

import { UsersignupPage } from './usersignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersignupPageRoutingModule
  ],
  declarations: [UsersignupPage]
})
export class UsersignupPageModule {}
