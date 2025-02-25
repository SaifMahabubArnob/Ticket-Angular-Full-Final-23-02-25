import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Query Params পড়ার জন্য

@Component({
  selector: 'app-ship-search',
  templateUrl: './ship-search.component.html',
  styleUrls: ['./ship-search.component.css']
})
export class ShipSearchComponent implements OnInit {
  fromPlace: string = '';
  toPlace: string = '';
  journeyDate: string = '';
  returnDate: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Query Params থেকে ডেটা পড়ো
    this.route.queryParams.subscribe(params => {
      this.fromPlace = params['from'];
      this.toPlace = params['to'];
      this.journeyDate = params['journeyDate'];
      this.returnDate = params['returnDate'];
    });
  }
}