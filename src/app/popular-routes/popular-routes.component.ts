import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-routes',
  templateUrl: './popular-routes.component.html',
  styleUrls: ['./popular-routes.component.css']
})
export class PopularRoutesComponent {
  routes = [
    { name: 'Dhaka to Cox\'s Bazar', image: 'https://img.freepik.com/premium-vector/address-location-vector-design-illustration_1281743-7234.jpg?ga=GA1.1.2049647867.1735061240&semt=ais_hybrid', link: 'https://bdtickets.com/popular-routes/dhaka-to-coxs-bazar' },
    { name: 'Dhaka to Khagrachari', image: 'https://img.freepik.com/premium-vector/address-location-vector-design-illustration_1281743-7234.jpg?ga=GA1.1.2049647867.1735061240&semt=ais_hybrid', link: 'https://bdtickets.com/popular-routes/dhaka-to-khagrachari' },
    { name: 'Dhaka to Barisal', image: 'https://img.freepik.com/premium-vector/address-location-vector-design-illustration_1281743-7234.jpg?ga=GA1.1.2049647867.1735061240&semt=ais_hybrid', link: 'https://bdtickets.com/popular-routes/dhaka-to-barisal' },
    { name: 'Dhaka to Chittagong', image: 'https://img.freepik.com/premium-vector/address-location-vector-design-illustration_1281743-7234.jpg?ga=GA1.1.2049647867.1735061240&semt=ais_hybrid', link: 'https://bdtickets.com/popular-routes/dhaka-to-chittagong' },
    { name: 'Dhaka to Khulna', image: 'https://img.freepik.com/premium-vector/address-location-vector-design-illustration_1281743-7234.jpg?ga=GA1.1.2049647867.1735061240&semt=ais_hybrid', link: 'https://bdtickets.com/popular-routes/dhaka-to-khulna' },
    { name: 'Dhaka to Bandarban', image: 'https://img.freepik.com/premium-vector/address-location-vector-design-illustration_1281743-7234.jpg?ga=GA1.1.2049647867.1735061240&semt=ais_hybrid', link: 'https://bdtickets.com/popular-routes/dhaka-to-bandarban' },
    { name: 'Dhaka to Teknaf', image: 'https://img.freepik.com/premium-vector/address-location-vector-design-illustration_1281743-7234.jpg?ga=GA1.1.2049647867.1735061240&semt=ais_hybrid', link: 'https://bdtickets.com/popular-routes/dhaka-to-teknaf' },
    { name: 'Dhaka to Rangamati', image: 'https://img.freepik.com/premium-vector/address-location-vector-design-illustration_1281743-7234.jpg?ga=GA1.1.2049647867.1735061240&semt=ais_hybrid', link: 'https://bdtickets.com/popular-routes/dhaka-to-rangamati' },
    { name: 'Dhaka to Rangpur', image: 'https://img.freepik.com/premium-vector/address-location-vector-design-illustration_1281743-7234.jpg?ga=GA1.1.2049647867.1735061240&semt=ais_hybrid', link: 'https://bdtickets.com/popular-routes/dhaka-to-rangpur' },
    { name: 'Dhaka to Kuakata', image: 'https://img.freepik.com/premium-vector/address-location-vector-design-illustration_1281743-7234.jpg?ga=GA1.1.2049647867.1735061240&semt=ais_hybrid', link: 'https://bdtickets.com/popular-routes/dhaka-to-kuakata' },
    { name: 'Dhaka to Sylhet', image: 'https://img.freepik.com/premium-vector/address-location-vector-design-illustration_1281743-7234.jpg?ga=GA1.1.2049647867.1735061240&semt=ais_hybrid', link: 'https://bdtickets.com/popular-routes/dhaka-to-sylhet' }
  ];
}
