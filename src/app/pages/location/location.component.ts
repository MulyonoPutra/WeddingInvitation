import { Component, OnInit } from '@angular/core';
import { BaseConstants } from 'src/app/core/constants/base-constants';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  days: any;
  hours!: number;
  minutes!: number;
  seconds!: number;

  google: any;

  lat = 51.678418;
  lng = 7.809007;

  ngOnInit(): void {
    this.countdownTimer;
  }

  countdownTimer = setInterval(() => {
    let futureDate = new Date(BaseConstants.WEDDING_DATE).getTime();
    let today = new Date().getTime();
    let distance = futureDate - today;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(this.countdownTimer);
      this.days = 'Here we go!';
    }
  }, 1000);
}


