import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.css']
})
export class IncomeTaxComponent implements OnInit {
  public employee: any;
  public annualIncomeTax: any;
  public monthlyIncomeTax: any;
  public weeklyIncomeTax: any;
  public dailyIncomeTax: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((res)=>{
      
      // passed object from landing-table
      this.employee = res;

      this.annualIncomeTax = parseFloat(res.incomeTax).toFixed(2);
      this.monthlyIncomeTax = (this.annualIncomeTax / 12).toFixed(2);
      this.weeklyIncomeTax = (this.annualIncomeTax / 52).toFixed(2);
      this.dailyIncomeTax = (this.annualIncomeTax / 365).toFixed(2);
    })
  }
}
