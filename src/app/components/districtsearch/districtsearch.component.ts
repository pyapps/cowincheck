import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-districtsearch',
  templateUrl: './districtsearch.component.html',
  styleUrls: ['./districtsearch.component.scss']
})
export class DistrictsearchComponent implements OnInit {
  stateId;
  districtId;
  stateList;
  districtList
  constructor() { }

  ngOnInit(): void {
  }

  getDistricts(){}

}
