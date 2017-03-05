import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-notes',
  templateUrl: './category-notes.component.html',
  styleUrls: ['./category-notes.component.css']
})
export class CategoryNotesComponent implements OnInit {

  notes: string;

  constructor() { }

  ngOnInit() {
    this.notes = '';
  }

}
