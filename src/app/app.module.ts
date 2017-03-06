import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TreeModule } from 'angular2-tree-component';
import { DndModule } from 'ng2-dnd';
// import { angularBootstrapNavTree } from '../assets/abn_tree_directive';
// import { MdTabsModule } from 'md-tabs/tabs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { CategoryPropertiesComponent } from './category/category-properties.component';
import { CategoryAttributesComponent } from './category/category-attributes.component';
import { CategoryNotesComponent } from './category/category-notes.component';
import { CategoryProductsComponent } from './category/category-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryComponent,
    TreeViewComponent,
    CategoryPropertiesComponent,
    CategoryAttributesComponent,
    CategoryNotesComponent,
    CategoryProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeModule,
    DndModule.forRoot(),
    // MdTabsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'category', component: CategoryComponent },
      { path: '', redirectTo: 'category', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
