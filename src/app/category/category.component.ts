import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    pageTitle: string = 'Product Category';
    pageDisplayed: number = 0 // 0 = Properties, 1 = Attributes, 2 = Notes, 3 = Products

    constructor() { }

    ngOnInit() {
    }

    getActive(id: number){
        if(id == this.pageDisplayed)
            return 'active';
        else
            return 'inactive';
    }

}
