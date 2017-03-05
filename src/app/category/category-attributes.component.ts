import { Component, OnInit } from '@angular/core';
import { CategoryAttributes } from './category-attributes';

@Component({
  selector: 'app-category-attributes',
  templateUrl: './category-attributes.component.html',
  styleUrls: ['./category-attributes.component.css']
})
export class CategoryAttributesComponent implements OnInit {

  attributes: CategoryAttributes;

  constructor() { }

  ngOnInit() {
    this.attributes = {
      id: 1,
      wwcmContent: 'test',
      targetUrl: 'test.html',
      newWindow: false,
      globalNav: false,
      requireHttps: true,
      browseByColor: true,
      showSortByOptions: false,
      showInTopNav: true,
      showinTopNavDrop: true,
      labelCssOverride: '',
      labelPrefix: '',
      labelPrefixCss: '',
      safetyStock: ''
    };
  }

}
