import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-userappointment',
  templateUrl: './userappointment.page.html',
  styleUrls: ['./userappointment.page.scss'],
})
export class UserappointmentPage implements OnInit {
  bookingForm: FormGroup;
  constructor() { }
  ngOnInit() {
  }
}


