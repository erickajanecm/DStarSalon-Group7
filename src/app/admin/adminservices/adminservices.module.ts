import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminservicesPageRoutingModule } from './adminservices-routing.module';

import { AdminservicesPage } from './adminservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminservicesPageRoutingModule
  ],
  declarations: [AdminservicesPage]
})
export class AdminservicesPageModule {}
