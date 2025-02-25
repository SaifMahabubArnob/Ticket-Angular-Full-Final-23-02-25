// frontend/src/app/services/hotel.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private apiUrl = 'http://localhost:8084/api/hotels';

  constructor(private http: HttpClient) {}

  getAllHotels(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getHotelById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  bookRoom(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/book`, {});
  }
}