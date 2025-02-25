import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.css']
})
export class BusSearchComponent implements OnInit {
  fromPlace: string = '';
  toPlace: string = '';
  journeyDate: string = '';
  returnDate: string = '';

  // Example bus list (you can replace this with data fetched from an API)
  buses = [
    {
      name: 'Green Line',
      departure: '8:00 AM',
      arrival: '12:00 PM',
      fare: 20
    },
    {
      name: 'Shohagh Paribahan',
      departure: '9:00 AM',
      arrival: '1:00 PM',
      fare: 18
    }
    // Add more buses as needed
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Retrieve query parameters from the URL
    this.route.queryParams.subscribe(params => {
      this.fromPlace = params['from'];
      this.toPlace = params['to'];
      this.journeyDate = params['journeyDate'];
      this.returnDate = params['returnDate'];
    });
  }

  // Method to navigate to the seat selection page
  navigateToSeatSelection(bus: any): void {
    this.router.navigate(['/seat-selection'], {
      queryParams: {
        busName: bus.name,
        departure: bus.departure,
        arrival: bus.arrival,
        fare: bus.fare,
        fromPlace: this.fromPlace,
        toPlace: this.toPlace,
        journeyDate: this.journeyDate,
        returnDate: this.returnDate
      }
    });
  }
}