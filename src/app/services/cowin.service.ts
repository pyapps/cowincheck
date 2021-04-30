import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAvailability } from '../models/availability.model';

@Injectable({
  providedIn: 'root',
})
export class cowincheckService {
  apiUrl = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/';

  constructor(private http: HttpClient) {}

  searchByPin() {
    return this.http.get<IAvailability>(
      this.apiUrl + 'calendarByPin?pincode=560076&date=01-05-2021'
    );
  }

  searchByDistrict() {
    return this.http.get<IAvailability>(
      this.apiUrl + 'calendarByDistrict?district_id=265&date=01-05-2021'
    );
  }
}
