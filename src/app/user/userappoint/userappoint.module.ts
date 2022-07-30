import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserappointPageRoutingModule } from './userappoint-routing.module';

import { UserappointPage } from './userappoint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserappointPageRoutingModule
  ],
  declarations: [UserappointPage]
})
export class UserappointPageModule {}
