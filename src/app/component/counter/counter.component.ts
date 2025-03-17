import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  constructor(private router:Router){}
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }


  goToItemList() {
    this.router.navigate(['/itemlists']); // Navigates to item list view
  }




}
