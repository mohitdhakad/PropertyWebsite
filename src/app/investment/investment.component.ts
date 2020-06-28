import { Component, OnInit } from '@angular/core';
import { Property, PropertyTypes } from '../models/property.model';
import { PropertyPages } from '../services/mock-property';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  properties: Property[];

  constructor() {
    // this.properties = PROPERTIES.filter(property => property.parentPropertyType == PropertyTypes.InvestmentProperty);
  }

  ngOnInit(): void {}
}
