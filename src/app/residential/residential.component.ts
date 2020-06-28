import { Component, OnInit } from '@angular/core';
import {
  Property,
  PropertyTypes,
  PropertyPage
} from '../models/property.model';
import { PropertyPages } from '../services/mock-property';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.scss']
})
export class ResidentialComponent implements OnInit {
  propertyPage: PropertyPage;

  constructor() {
    this.propertyPage = PropertyPages.filter(
      property => property.pagePropertyType == PropertyTypes.ResidentialProperty
    )[0];

    console.log('doneee');
  }

  ngOnInit(): void {}
}
