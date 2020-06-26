import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../property/models/index';
import { PROPERTIES } from './services/mock-property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  properties: Property[];
  showAllProducts: boolean = true;

  // @Input() imageSource; comment
  // @Input() description;
  // @Input() title;
  // @Input() price;

  constructor() {
    this.properties = PROPERTIES;
  }

  ngOnInit(): void {}
}
