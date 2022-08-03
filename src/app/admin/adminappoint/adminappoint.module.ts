import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminappointPageRoutingModule } from './adminappoint-routing.module';

import { AdminappointPage } from './adminappoint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdminappointPageRoutingModule
  ],
  declarations: [AdminappointPage]
})
export class AdminappointPageModule {}
