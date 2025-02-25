import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightBookingService {
  createBooking(value: any) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8084/api/flights'; // Spring Boot API URL

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {}

  // ✅ নতুন ফ্লাইট বুকিং করা
  bookFlight(bookingData: any): Observable<any> {
    return this.http.post(this.apiUrl, bookingData, this.httpOptions);
  }

  // ✅ সব ফ্লাইট বুকিং আনা
  getAllBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, this.httpOptions);
  }

  // ✅ নির্দিষ্ট ID অনুযায়ী বুকিং আনা
  getBookingById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  // ✅ বুকিং আপডেট করা
  updateBooking(id: number, bookingData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, bookingData, this.httpOptions);
  }

  // ✅ বুকিং ডিলিট করা
  cancelBooking(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
