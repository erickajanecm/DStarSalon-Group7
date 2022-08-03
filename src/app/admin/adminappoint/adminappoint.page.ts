import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-adminappoint',
  templateUrl: './adminappoint.page.html',
  styleUrls: ['./adminappoint.page.scss'],
})
export class AdminappointPage implements OnInit {
  bookingForm: FormGroup;
  constructor(
    private aptService: AppointmentService,
    private router: Router,
    public fb: FormBuilder,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });
  }
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
        this.router.navigate(['/adminhome/adminschedule']);
      })
        .catch(error => console.log(error));
    }
  }
}
