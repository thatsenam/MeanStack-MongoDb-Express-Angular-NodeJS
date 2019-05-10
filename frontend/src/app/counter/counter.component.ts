import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter = 0;
  constructor() {
    setInterval(() => {
      this.counter++;
    }, 500);

  }

  ngOnInit() {

  }


}
