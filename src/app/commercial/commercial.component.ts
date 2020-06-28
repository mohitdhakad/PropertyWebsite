import { Component, OnInit } from '@angular/core';
import {
  Property,
  PropertyTypes,
  PropertyPage
} from '../models/property.model';
import { PropertyPages } from '../services/mock-property';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {
  propertyPage: PropertyPage;

  constructor() {
    this.propertyPage = PropertyPages.filter(
      property => property.pagePropertyType == PropertyTypes.CommercialProperty
    )[0];
  }

  ngOnInit(): void {}
}
