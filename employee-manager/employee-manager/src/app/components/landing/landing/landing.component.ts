import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/service/employee.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  public employees: Array<any> = [];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeService
      .getEmployees()
      .subscribe(
        // success callback
        (res: Array<any>) => {
          this.employees = this.bubbleSortById(res);
        },
        // error callback
        (err) => {
          console.log(err)
        })
  }
  // searching through employees data by first name or surname
  public filterSearchInEmployeesData(text: string): void {
    let searchArray: Array<any> = [];

    for (var employee of this.employees) {
      if (employee.firstName.toLowerCase().includes(text.toLowerCase())) {
        searchArray.push(employee);
      } else if (employee.surname.toLowerCase().includes(text.toLowerCase())) {
        searchArray.push(employee);
      }
    }

    this.employees = searchArray;
  }
  // bubble sorting employees by ID
  private bubbleSortById(arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
      for (var j = 1; j <= i; j++) {
        if (arr[j - 1].id > arr[j].id) {
          var temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
}
