import { Component } from '@angular/core';
import { BusBookingService } from '../bus-booking.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bus-booking-form',
  templateUrl: './bus-booking-form.component.html',
  styleUrls: ['./bus-booking-form.component.css']
})
export class BusBookingFormComponent {
  bookingData: FormGroup = new FormGroup({
    fromLocation: new FormControl(''),
    toLocation: new FormControl(''),
    journeyDate: new FormControl(''),
    journeyTime: new FormControl(''),
    seats: new FormControl(1), // Default value 1
    busClass: new FormControl(''),
    passengerName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    ageGroup: new FormControl(''),
    discountCode: new FormControl(''),
    fare: new FormControl(0), // Default fare 0
    terms: new FormControl(false),
    returnDate: new FormControl(''),
    returnTime: new FormControl(''),
    tripType: new FormControl('one-way')
  });

  estimatedFare: number = 0; // To store the calculated fare
  discount: number = 0; // To store the discount amount

  priceList = {
    "AC": 500,
    "Non-AC": 300,
    "Sleeper": 400
  };

  constructor(private busBookingService: BusBookingService) {}

  // Method to calculate fare
  calculateFare() {
    const selectedClass = this.bookingData.get('busClass')?.value as keyof typeof this.priceList;
    const numberOfSeats = this.bookingData.get('seats')?.value;
    const discountCode = this.bookingData.get('discountCode')?.value;

    const pricePerSeat = this.priceList[selectedClass] || 0;
    let totalFare = pricePerSeat * numberOfSeats;

    // Calculate discount
    if (discountCode === 'DISCOUNT10') {
      this.discount = 10;
    } else if (discountCode === 'DISCOUNT20') {
      this.discount = 20;
    } else {
      this.discount = 0;
    }

    totalFare -= this.discount;
    this.estimatedFare = totalFare; // Update estimated fare
  }

  onSubmit() {
    const bookingData = this.bookingData.value;
    bookingData.fare = this.estimatedFare; // Ensure fare is included in the data
    console.log(bookingData);
  
    this.busBookingService.createBooking(bookingData).subscribe(
      response => {
        console.log('Booking successful:', response);
        alert('Booking successful!');
      },
      error => {
        console.error('Error creating booking:', error);
        alert('Error creating booking.');
      }
    );
  }
}