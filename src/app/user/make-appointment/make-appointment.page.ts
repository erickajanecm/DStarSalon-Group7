import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.page.html',
  styleUrls: ['./make-appointment.page.scss'],
})
export class MakeAppointmentPage implements OnInit {
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
      mobile: ['']
    });
  }
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;

    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res);
        this.bookingForm.reset();
        this.router.navigate(['/home/userappointment/make-appointment']);
      })
        .catch(error => console.log(error));
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm Booking?',
      buttons: ['CONFIRM']
    });

    await alert.present();
  }
}
