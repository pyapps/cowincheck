import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAvailability } from '../models/availability.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class cowincheckService {
  apiUrl = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/';
  apiUrl2 = 'https://cdn-api.co-vin.in/api/v2/admin/location/';

  constructor(private http: HttpClient) {}

  getStates() {
    return this.http.get(environment.locationApi + 'states');
  }

  getDistricts(state_code) {
    return this.http.get(environment.locationApi + 'districts/' + state_code);
  }

  searchByPin(pincode, sel_dt) {
    return this.http.get<IAvailability>(
      environment.publicApi + 'calendarByPin?pincode=' + pincode + '&date=' + sel_dt
    );
  }

  searchByDistrict(dist_id = '265', sel_dt) {
    return this.http.get<IAvailability>(
      environment.publicApi + 'calendarByDistrict?district_id='+dist_id+'&date='+sel_dt
    );
  }
}
