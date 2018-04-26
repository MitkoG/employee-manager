import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-landing-table',
  templateUrl: './landing-table.component.html',
  styleUrls: ['./landing-table.component.css']
})
export class LandingTableComponent {

  // getting props from parent 
  @Input() employees: any;
  public employeesHeader: any = [];

  constructor(
    private router: Router
  ) { }

  // navigation to take-home-pay page with all props of the employee
  public navigateToTakeHomePay(employee) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        ...employee
      }
    }
    
    this.router.navigate(['/home/take-home-pay'], navigationExtras)
  }

  // navigation to income-tax page with all props of the employee
  public navigateToIncomeTax(employee: any) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        ...employee
      }
    }

    this.router.navigate(['/home/income-tax'], navigationExtras)
  }

  // navigation to national-insurance page with all props of the employee
  public navigateToNationalInsurance(employee: any) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        ...employee
      }
    }

    this.router.navigate(['/home/national-insurance'], navigationExtras)
  }

}
