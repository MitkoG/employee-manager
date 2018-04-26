import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { IncomeTaxComponent } from "./income-tax/income-tax.component";
import { TakeHomePayComponent } from "./take-home-pay/take-home-pay.component";
import { NationalInsuranceComponent } from "./national-insurance/national-insurance.component";

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'income-tax', component: IncomeTaxComponent },
    { path: 'take-home-pay', component: TakeHomePayComponent },
    { path: 'national-insurance', component: NationalInsuranceComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LandingRoutingModule { }
