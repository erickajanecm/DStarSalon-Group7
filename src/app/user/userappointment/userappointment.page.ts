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
  constructor(
    private aptService: AppointmentService,
    private router: Router,
    public fb: FormBuilder,
    private alertController: AlertController
  ) { }
  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      date: [''],
      time: [''],
      serve: [''],
      beaut: [''],
    });
  }
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;

    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res);
        this.bookingForm.reset();
        this.router.navigate(['/home/userappointment']);
      })
        .catch(error => console.log(error));
    }
  }
}
