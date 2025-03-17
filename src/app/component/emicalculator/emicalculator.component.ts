import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.scss']
})
export class EmicalculatorComponent {
  constructor(private router:Router){}

  loanAmount: number = 100000;
  interestRate: number = 5;
  loanTerm: number = 5;
  emi: number | null = null;

  validateInput() {
    if (this.loanAmount < 0) this.loanAmount = 0;
    if (this.interestRate < 0) this.interestRate = 0;
    if (this.loanTerm < 0) this.loanTerm = 0;
    this.calculateEMI();
  }

  calculateEMI() {
    const P = this.loanAmount;
    const r = this.interestRate / 100 / 12;
    const n = this.loanTerm * 12;

    if (P > 0 && r > 0 && n > 0) {
      this.emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      this.emi = null;
    }
  }


  goBackItemlists() {
    this.router.navigate(['/itemlists']); // Navigates to back
  }


}
