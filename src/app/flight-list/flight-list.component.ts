import { Component, OnInit } from '@angular/core';
import { FlightBookingService } from '../services/flight-booking.service';

interface Flight {
  id: number;
  tripType: string;
  fromLocation: string;
  toLocation: string;
  journeyDate: string;
  returnDate?: string;
  arrivalTime: string;
  passengerType: string;
  passengerCount: number;
  mealPreference: string;
  classType: string;
  insurance: boolean;
  couponCode?: string;
  airline: string;
  ticketPrice: number;
  paymentMethod: string;
}

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights: any[] = [];

  constructor(private flightBookingService: FlightBookingService) {}

  ngOnInit(): void {
    this.flightBookingService.getAllBookings().subscribe((val : any) =>{
      this.flights = val
    })
  }
}
