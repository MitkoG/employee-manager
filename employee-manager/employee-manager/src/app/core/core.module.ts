import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { coreComponents } from './index';
import { RouterModule } from '@angular/router';
import { EmployeeService } from './service/employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [...coreComponents],
  providers: [
    EmployeeService
  ],
  exports: [
    ...coreComponents,
    HttpClientModule,
    RouterModule
  ]
})

export class CoreModule { }