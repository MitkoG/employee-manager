import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./core/components/page-not-found/page-not-found.component";
import { LandingModule } from "./components/landing/landing.module";

console.log("app routing module");
const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path: 'home', loadChildren: () => LandingModule},

    {path: '**', component: PageNotFoundComponent}    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
