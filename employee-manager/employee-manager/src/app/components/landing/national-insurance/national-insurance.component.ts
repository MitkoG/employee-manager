import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-national-insurance',
  templateUrl: './national-insurance.component.html',
  styleUrls: ['./national-insurance.component.css']
})
export class NationalInsuranceComponent implements OnInit {
  public employee: any;
  public annualNationalInsurance: any;
  public monthlyNationalInsurance: any;
  public weeklyNationalInsurance: any;
  public dailyNationalInsurance: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((res) => {
      // passed object from landing-table
      this.employee = res;

      this.annualNationalInsurance = parseFloat(res.nationalInsurance).toFixed(2);
      this.monthlyNationalInsurance = (this.annualNationalInsurance / 12).toFixed(2);
      this.weeklyNationalInsurance = (this.annualNationalInsurance / 52).toFixed(2);
      this.dailyNationalInsurance = (this.annualNationalInsurance / 365).toFixed(2);
    })
  }

}
