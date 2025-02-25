import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusBookingService {

  private apiUrl = 'http://localhost:8084/api/busBookings';  

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  createBooking(busBooking: any): Observable<any> {
    return this.http.post(this.apiUrl, busBooking, this.httpOptions);
  }

  getAllBookings(): Observable<any> {
    return this.http.get(this.apiUrl, this.httpOptions);
  }

  getBookingById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  updateBooking(id: number, busBooking: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, busBooking, this.httpOptions);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
