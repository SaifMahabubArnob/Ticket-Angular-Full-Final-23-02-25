import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlightBookingService } from '../services/flight-booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-booking-form',
  templateUrl: './flight-booking-form.component.html',
  styleUrls: ['./flight-booking-form.component.css']
})
export class FlightBookingFormComponent {
  flightForm: FormGroup= new FormGroup({
    tripType: new FormControl('oneWay'),
    fromLocation: new FormControl('', Validators.required),
    toLocation: new FormControl('', Validators.required),
    journeyDate: new FormControl('', Validators.required),
    returnDate: new FormControl(''),
    arrivalTime: new FormControl('', Validators.required),
    passengerType: new FormControl('Adult'),
    passengerCount: new FormControl(1, [Validators.required, Validators.min(1)]),
    mealPreference: new FormControl('Vegetarian'),
    classType: new FormControl('Economy'),
    insurance: new FormControl(false),
    couponCode: new FormControl(''),
    airline: new FormControl('', Validators.required),
    ticketPrice: new FormControl(0),
    paymentMethod: new FormControl('creditCard', Validators.required)
  });

  isReturnDateVisible: boolean = false;

  constructor(private flightBookingService: FlightBookingService,
    private router: Router 
  ) {
    this.flightForm = new FormGroup({
      tripType: new FormControl('oneWay'),
      fromLocation: new FormControl('', Validators.required),
      toLocation: new FormControl('', Validators.required),
      journeyDate: new FormControl('', Validators.required),
      returnDate: new FormControl(''),
      arrivalTime: new FormControl('', Validators.required),
      passengerType: new FormControl('Adult'),
      passengerCount: new FormControl(1, [Validators.required, Validators.min(1)]),
      mealPreference: new FormControl('Vegetarian'),
      classType: new FormControl('Economy'),
      insurance: new FormControl(false),
      couponCode: new FormControl(''),
      airline: new FormControl('', Validators.required),
      ticketPrice: new FormControl(0),
      paymentMethod: new FormControl('creditCard', Validators.required)
    });
  }

  toggleReturnDate() {
    this.isReturnDateVisible = this.flightForm.get('tripType')?.value === 'roundTrip';
    if (!this.isReturnDateVisible) {
      this.flightForm.get('returnDate')?.setValue('');
    }
  }

  calculateFare() {
    let basePrice = 1000;
    const airline = this.flightForm.get('airline')?.value;
    if (airline) {
      basePrice += 500;
    }
    this.flightForm.get('ticketPrice')?.setValue(basePrice);
  }

  submitForm() {
    console.log(this.flightForm.value);
    
    this.flightBookingService.bookFlight(this.flightForm.value).subscribe((val : any)=> {
      console.log("create succesfully)");
      this.router.navigateByUrl('/flightList')
    })
    // if (this.flightForm.valid) {
    //   console.log("Form Submitted: ", this.flightForm.value);
    // } else {
    //   console.log("Form is invalid");
    // }
  }
}
