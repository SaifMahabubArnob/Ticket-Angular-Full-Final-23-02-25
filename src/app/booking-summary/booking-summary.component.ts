import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {
  bookingDetails: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve booking details from query parameters
    this.route.queryParams.subscribe(params => {
      this.bookingDetails = {
        busName: params['busName'],
        departure: params['departure'],
        arrival: params['arrival'],
        fare: params['fare'], // Total fare passed from seat selection
        boardingPoint: params['boardingPoint'],
        droppingPoint: params['droppingPoint'],
        mobileNumber: params['mobileNumber'],
        email: params['email'],
        gender: params['gender'],
        firstName: params['firstName'],
        lastName: params['lastName'],
        passengerType: params['passengerType'],
        selectedSeats: JSON.parse(params['selectedSeats'])
      };
    });
  }
}