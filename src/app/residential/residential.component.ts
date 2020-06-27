import { Component, OnInit } from '@angular/core';
import { Property,PropertyTypes } from '../models/property.model';
import { PROPERTIES } from '../services/mock-property';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.scss']
})
export class ResidentialComponent implements OnInit {
  properties: Property[];
 
  
 
  constructor() {

    
    this.properties = PROPERTIES.filter(property => property.parentPropertyType == PropertyTypes.ResidentialProperty);
    console.log("doneee")
  }

  ngOnInit(): void {
  }

}
