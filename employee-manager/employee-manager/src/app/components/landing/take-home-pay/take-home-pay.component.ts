import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-take-home-pay',
  templateUrl: './take-home-pay.component.html',
  styleUrls: ['./take-home-pay.component.css']
})

export class TakeHomePayComponent implements OnInit {
  public employee: any;
  public annualTakeHomePay: any;
  public monthlyTakeHomePay: any;
  public weeklyTakeHomePay: any;
  public dailyTakeHomePay: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((res) => {
      // passed object from landing-table
      this.employee = res;

      this.annualTakeHomePay = parseFloat((res.salary - res.incomeTax - res.nationalInsurance).toFixed(2));
      this.monthlyTakeHomePay = (this.annualTakeHomePay / 12).toFixed(2);
      this.weeklyTakeHomePay = (this.annualTakeHomePay / 52).toFixed(2);
      this.dailyTakeHomePay = (this.annualTakeHomePay / 365).toFixed(2);
    })
  }

}
