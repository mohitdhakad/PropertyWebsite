import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/property.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResidentialComponent } from './residential/residential.component';
import { InvestmentComponent } from './investment/investment.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"property",component:PropertyComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"residential",component:ResidentialComponent},
  {path:"investment",component:InvestmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
