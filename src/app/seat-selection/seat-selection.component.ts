import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent implements OnInit {
  selectedBus: any = {};
  seats: any[] = [];
  selectedSeats: any[] = [];

  // Additional fields
  boardingPoints: string[] = ['Point A', 'Point B', 'Point C'];
  droppingPoints: string[] = ['Point X', 'Point Y', 'Point Z'];
  selectedBoardingPoint: string = '';
  selectedDroppingPoint: string = '';
  mobileNumber: string = '';
  email: string = '';
  gender: string = '';
  bookingDate: string = new Date().toISOString();

  // New Passenger Fields
  firstName: string = '';
  lastName: string = '';
  passengerType: string = 'Self'; // Default value

  // Fare calculation
  baseFare: number = 0;
  totalFare: number = 0;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve the selected bus details from query parameters
    this.route.queryParams.subscribe(params => {
      this.selectedBus = {
        name: params['busName'],
        departure: params['departure'],
        arrival: params['arrival'],
        fare: +params['fare'], // Convert fare to a number
        capacity: +params['capacity'] || 40 // Default capacity is 40 if not provided
      };
      this.baseFare = this.selectedBus.fare; // Set base fare
      this.totalFare = 0; // Initialize total fare
    });

    // Dynamically initialize available seats based on bus capacity
    this.seats = Array.from({ length: this.selectedBus.capacity }, (_, i) => ({
      id: i + 1,
      isSelected: false
    }));
  }

  selectSeat(seat: any): void {
    if (!seat.isSelected) {
      seat.isSelected = true;
      this.selectedSeats.push(seat);
    } else {
      seat.isSelected = false;
      this.selectedSeats = this.selectedSeats.filter(s => s.id !== seat.id);
    }

    // Recalculate total fare
    this.calculateTotalFare();
  }

  calculateTotalFare(): void {
    this.totalFare = this.selectedSeats.length * this.baseFare;
  }

  proceedBooking(): void {
    if (!this.firstName || !this.lastName || !this.selectedBoardingPoint || !this.selectedDroppingPoint || !this.mobileNumber || !this.email || !this.gender || this.selectedSeats.length === 0) {
      alert('Please fill all the required fields!');
      return;
    }

    const bookingData = {
      busName: this.selectedBus.name,
      departure: this.selectedBus.departure,
      arrival: this.selectedBus.arrival,
      totalFare: this.totalFare,
      boardingPoint: this.selectedBoardingPoint,
      droppingPoint: this.selectedDroppingPoint,
      mobileNumber: this.mobileNumber,
      email: this.email,
      gender: this.gender,
      bookingDate: this.bookingDate,
      firstName: this.firstName,
      lastName: this.lastName,
      passengerType: this.passengerType,
      selectedSeats: JSON.stringify(this.selectedSeats.map(seat => seat.id))
    };

    this.http.post('http://localhost:8084/api/bookingB', bookingData).subscribe(response => {
      console.log('Booking saved:', response);
      alert('Booking successful!');
      this.router.navigate(['/booking-summary'], { queryParams: bookingData });
    }, error => {
      console.error('Error saving booking:', error);
      alert('An error occurred while saving the booking.');
    });
}
}