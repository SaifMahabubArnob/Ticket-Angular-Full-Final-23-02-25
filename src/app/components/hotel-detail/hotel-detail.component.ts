// frontend/src/app/components/hotel-detail/hotel-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css'],
})
export class HotelDetailComponent implements OnInit {
  hotel: any;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.hotelService.getHotelById(id).subscribe((data) => {
      this.hotel = data;
    });
  }
}