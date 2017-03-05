import { Component, OnInit } from '@angular/core';
import { CategoryProperties } from './category-properties';

@Component({
  selector: 'app-category-properties',
  templateUrl: './category-properties.component.html',
  styleUrls: ['./category-properties.component.css']
})
export class CategoryPropertiesComponent implements OnInit {

  properties: CategoryProperties;

  constructor() { }

  ngOnInit() {
    this.properties = {
      id: 12,
      name: 'Precious Moments',
      wcsSeoname: 'precious-moments',
      url: 'http://www.davidsbridal.com/precious-moments',
      wcsIdentifier: 'CEREMONY-RECEPTION-COLLECTIONS-PRECIOUS-MOMENTS',
      shortDescription: "David's Bridal | Ceremony | Reception | Collections | Precious Moments",
      longDescription: '',
      allowProducts: true
    }
  }

}
