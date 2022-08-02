/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/shared/Appointment';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-userhomepage',
  templateUrl: 'userhomepage.page.html',
  styleUrls: ['userhomepage.page.scss'],
})
export class UserhomepagePage implements OnInit {
  bookings = [];
  dateTime;
  constructor(
    private aptService: AppointmentService,
  ) {}

  ngOnInit() {
    this.fetchBookings();
    const bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.bookings = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.bookings.push(a as Appointment);
      });
    });

    setTimeout(() => {
      this.dateTime = new Date().toISOString();
    });
  }
  fetchBookings() {
    this.aptService.getBookingList().valueChanges().subscribe(res => {
      console.log(res);
    });
  }
  deleteBooking(id) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteBooking(id);
    }
  }
}
