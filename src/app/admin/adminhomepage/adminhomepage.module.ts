import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminhomepagePageRoutingModule } from './adminhomepage-routing.module';

import { AdminhomepagePage } from './adminhomepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminhomepagePageRoutingModule
  ],
  declarations: [AdminhomepagePage]
})
export class AdminhomepagePageModule {}
