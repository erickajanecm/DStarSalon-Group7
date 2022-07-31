import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditApptPageRoutingModule } from './edit-appt-routing.module';

import { EditApptPage } from './edit-appt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditApptPageRoutingModule
  ],
  declarations: [EditApptPage]
})
export class EditApptPageModule {}
