import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserappointmentPageRoutingModule } from './userappointment-routing.module';

import { UserappointmentPage } from './userappointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserappointmentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UserappointmentPage]
})
export class UserappointmentPageModule {}
