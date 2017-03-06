import { Component, OnInit } from '@angular/core';
import { CategoryProducts } from './category-products';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  products: Array<CategoryProducts>;
  recycled: Array<CategoryProducts>;

  // products: CategoryProducts[];

  constructor() { }

  ngOnInit() {
    this.products = [
      {id: 1, name:'Product 1', amount:10, flag:true},
      {id: 2, name:'Product 2', amount:11, flag:false},
      {id: 3, name:'Product 3', amount:12, flag:true},
      {id: 4, name:'Product 4', amount:13, flag:false},
      {id: 5, name:'Product 5', amount:14, flag:true},
      {id: 6, name:'Product 6', amount:15, flag:true},
    ]
    this.recycled = [];
  }

}
