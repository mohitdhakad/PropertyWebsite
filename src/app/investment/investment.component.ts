import { Component, OnInit } from '@angular/core';
import {
  Property,
  PropertyTypes,
  PropertyPage
} from '../models/property.model';

import { PropertyPages } from '../services/mock-property';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  propertyPage: PropertyPage;

  constructor() {
    this.propertyPage = PropertyPages.filter(
      property => property.pagePropertyType == PropertyTypes.InvestmentProperty
    )[0];
  }

  ngOnInit(): void {}
}
