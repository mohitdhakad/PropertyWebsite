import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/property.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResidentialComponent } from './residential/residential.component';
import { InvestmentComponent } from './investment/investment.component';
import { AboutComponent } from './about/about.component';
import { CommercialComponent } from './commercial/commercial.component';
import { FooterComponent } from './footer/footer.component';
import { ViewComponent } from './view/view.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'residential', component: ResidentialComponent },
  { path: 'investment', component: InvestmentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'commercial', component: CommercialComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
