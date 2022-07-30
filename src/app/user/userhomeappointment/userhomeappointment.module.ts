import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserhomeappointmentPageRoutingModule } from './userhomeappointment-routing.module';

import { UserhomeappointmentPage } from './userhomeappointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserhomeappointmentPageRoutingModule
  ],
  declarations: [UserhomeappointmentPage]
})
export class UserhomeappointmentPageModule {}
