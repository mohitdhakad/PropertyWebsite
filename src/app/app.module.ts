import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/property.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResidentialComponent } from './residential/residential.component';
import { InvestmentComponent } from './investment/investment.component';
import { AboutComponent } from './about/about.component';
import { CommercialComponent } from './commercial/commercial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyComponent,
    NavbarComponent,
    ResidentialComponent,
    InvestmentComponent,
    AboutComponent,
    CommercialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
