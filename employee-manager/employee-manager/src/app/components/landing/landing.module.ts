import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LandingRoutingModule } from './landing.routes';
import { LandingComponent } from './landing/landing.component';
import { IncomeTaxComponent } from './income-tax/income-tax.component';
import { LandingTableComponent } from './landing-table/landing-table.component';
import { TakeHomePayComponent } from './take-home-pay/take-home-pay.component';
import { NationalInsuranceComponent } from './national-insurance/national-insurance.component';

@NgModule({
  imports: [
    SharedModule,
    LandingRoutingModule
  ],
  declarations: [LandingComponent, IncomeTaxComponent, LandingTableComponent, TakeHomePayComponent, NationalInsuranceComponent]
})

export class LandingModule { }
