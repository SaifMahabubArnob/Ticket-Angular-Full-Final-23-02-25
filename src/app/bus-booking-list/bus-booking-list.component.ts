import { Component, OnInit } from '@angular/core';
import { BusBookingService } from '../bus-booking.service';

interface BusBooking {
  id: number;
  fromLocation: string;
  toLocation: string;
  journeyDate: string;
  journeyTime: string;
  seats: number;
  busClass: string;
  passengerName: string;
  phone: string;
  email: string;
  ageGroup: string;
  fare: number;
}

@Component({
  selector: 'app-bus-booking-list',
  templateUrl: './bus-booking-list.component.html',
  styleUrls: ['./bus-booking-list.component.css']
})
export class BusBookingListComponent implements OnInit {
  bookings: BusBooking[] = [];

  constructor(private busBookingService: BusBookingService) {}
  ngOnInit(): void {
    this.busBookingService.getAllBookings().subscribe((data: BusBooking[]) => {
      this.bookings = data.map(booking => ({
        ...booking,
        fare: booking.fare || 0 // Ensure fare exists in the data
      }));
    });
  }
}
