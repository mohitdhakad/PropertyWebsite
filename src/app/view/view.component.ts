import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../models';
import { PropertyPages } from '../services/mock-property';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    // PropertyPages;
  }

  property: Property;
  propertyId: number;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      console.log(id);
      if (id && id > 0) {
        this.propertyId = id;

        PropertyPages.forEach(f => {
          f.children.forEach(a => {
            a.childProperties.forEach(b => {
              if (b.id == this.propertyId) {
                this.property = b;
              }
            });
          });
        });
      }
    });
  }
}
