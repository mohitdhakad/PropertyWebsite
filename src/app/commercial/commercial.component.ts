import { Component, OnInit } from '@angular/core';
import { Property,PropertyTypes } from '../models/property.model';
import { PROPERTIES } from '../services/mock-property';


@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {
  properties: Property[];


  constructor() {
    this.properties = PROPERTIES.filter(property => property.parentPropertyType == PropertyTypes.CommercialProperty);
   }

  ngOnInit(): void {
  }

}
