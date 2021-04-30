import { Component, OnInit } from '@angular/core';
import { IAvailability } from './models/availability.model';
import { cowincheckService } from './services/cowin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cowincheck';
  timeLeft: number = 60;
  checkFreq = 10;
  interval;
  timerOn = false;

  constructor(private cowincheck: cowincheckService) {}
  data: IAvailability | undefined;

  ngOnInit() {
    // this.cowincheck.searchByPin().subscribe((x) => {
    //   this.data = x;
    // });
  }

  startTimer() {
    this.timerOn = !this.timerOn;
    this.interval = setInterval(() => {
      this.cowincheck.searchByPin().subscribe((x) => {
        this.data = x;
      });
    }, this.checkFreq * 1000);
  }

  stopTimer() {
    this.timerOn = !this.timerOn;
    clearInterval(this.interval);
  }
}
