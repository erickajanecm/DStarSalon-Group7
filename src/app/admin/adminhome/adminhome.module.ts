import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminhomePageRoutingModule } from './adminhome-routing.module';

import { AdminhomePage } from './adminhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminhomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminhomePage]
})
export class AdminhomePageModule {}
