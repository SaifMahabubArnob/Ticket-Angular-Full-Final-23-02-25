import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Query Params পড়ার জন্য

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {
  location: string = '';
  checkInDate: string = '';
  checkOutDate: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Query Params থেকে ডেটা পড়ো
    this.route.queryParams.subscribe(params => {
      this.location = params['location'];
      this.checkInDate = params['checkInDate'];
      this.checkOutDate = params['checkOutDate'];
    });
  }
}