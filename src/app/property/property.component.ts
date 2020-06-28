import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../models/index';
import { PropertyPages } from '../services/mock-property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  properties: Property[];

  // @Input() imageSource; comment
  // @Input() description;
  // @Input() title;
  // @Input() price;

  constructor() {
    // this.properties = PROPERTIES;
  }

  ngOnInit(): void {}
}
