// frontend/src/app/components/hotel-list/hotel-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
})
export class HotelListComponent implements OnInit {
  hotels: any[] = [];

  constructor(private hotelService: HotelService, private router: Router) {}

  ngOnInit(): void {
    this.hotelService.getAllHotels().subscribe((data) => {
      this.hotels = data;
    });
  }

  viewHotelDetails(id: number): void {
    this.router.navigate(['/hotels', id]);
  }
}