import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IAvailability } from './models/availability.model';
import { cowincheckService } from './services/cowin.service';
import {StateList} from './constants/states.constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  searchType = 'pincode';
  pincode = '560076';
  timeLeft: number = 60;
  checkFreq = 10;
  interval;  
  timerOn = false;
  lastUpdated:Date;
  stateList = [];
  stateId;
  districtList = [];
  districtId;
  districtData;
  columnList = ['name','pincode','fee_type', 'date','available_capacity','min_age_limit','vaccine'];  
  selectDate = new Date();
  w2: Date;
  w3: Date; 
  w4: Date;
  gridData1 = [];
  gridData2 = [];
  gridData3 = [];
  gridData4 = [];
  @ViewChild('audioOption') audioPlayerRef: ElementRef;



  constructor(private cowincheck: cowincheckService) {}
  

  ngOnInit() {
    this.stateList = StateList;
  }

  searchByDistrict() {
    this.cowincheck
      .searchByDistrict(this.districtId, this.formatDate(this.selectDate))
      .subscribe((x) => {
        this.districtData = x;
      });
  }

  formatData(response) {    
    let dataList = <Array<Object>>response['centers']
    let output = [];
    dataList.forEach(center => {      
      <Array<Object>>center['sessions'].forEach(session => {
        let details = {};
        details['name'] = center['name'];
        details['pincode'] = center['pincode'];
        details['fee_type'] = center['fee_type'];
        details['date'] = session['date'];
        details['available_capacity'] = session['available_capacity'];
        details['min_age_limit'] = session['min_age_limit'];
        details['vaccine'] = session['vaccine'];
        output.push(details);
      });
    })
    return output;
  }

  searchByPincode1() {
    this.cowincheck.searchByPin(this.pincode, this.formatDate(this.selectDate)).subscribe((x) => {
      this.gridData1 = this.formatData(x);
    });
    this.cowincheck.searchByPin(this.pincode, this.formatDate(this.w2)).subscribe((x) => {
      this.gridData2 = this.formatData(x);
    });
    this.cowincheck.searchByPin(this.pincode, this.formatDate(this.w3)).subscribe((x) => {
      this.gridData3 = this.formatData(x);
    });
    this.cowincheck.searchByPin(this.pincode, this.formatDate(this.w4)).subscribe((x) => {
      this.gridData4 = this.formatData(x);
    });
  }

  searchByDistrict1() {
    this.cowincheck.searchByDistrict(this.districtId, this.formatDate(this.selectDate)).subscribe((x) => {
      this.gridData1 = this.formatData(x);
    });
    this.cowincheck.searchByDistrict(this.districtId, this.formatDate(this.w2)).subscribe((x) => {
      this.gridData2 = this.formatData(x);
    });
    this.cowincheck.searchByDistrict(this.districtId, this.formatDate(this.w3)).subscribe((x) => {
      this.gridData3 = this.formatData(x);
    });
    this.cowincheck.searchByDistrict(this.districtId, this.formatDate(this.w4)).subscribe((x) => {
      this.gridData4 = this.formatData(x);
    });
  }

  getGridData() {
    this.w2 = new Date(this.selectDate.valueOf());
    this.w2.setDate(this.w2.getDate()+7);
    this.w3 = new Date(this.selectDate.valueOf());
    this.w3.setDate(this.w3.getDate()+14);
    this.w4 = new Date(this.selectDate.valueOf());
    this.w4.setDate(this.w4.getDate()+21);
    if(this.searchType=='pincode') {
      this.searchByPincode1();
    } else {
      this.searchByDistrict1();
    }
    this.notifyUser();
    this.lastUpdated = new Date();
  }

  startTimer() {
    this.timerOn = !this.timerOn;
    this.getGridData();
    this.interval = setInterval(() => {
      this.getGridData();
      // this.searchByDistrict();
    }, this.checkFreq * 1000);
  }

  formatDate(input_dt: Date) {
    let day =
      input_dt.getDate() > 9 ? input_dt.getDate() : '0' + input_dt.getDate();
    let month = input_dt.getMonth() + 1;
    let newMonth = month > 9 ? month : '0' + month;
    return [day, newMonth, input_dt.getFullYear()].join('-');
  }

  stopTimer() {
    this.timerOn = !this.timerOn;
    clearInterval(this.interval);
  }

  getDistricts() {
    this.cowincheck.getDistricts(this.stateId).subscribe((x) => {
      this.districtList = x['districts'];
    });
  }

  notifyUser(){
    this.audioPlayerRef.nativeElement.play();
  }
}
