import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { ChildBooksComponent } from './child-books/child-books.component';
import { BooksNameComponent } from './books-name/books-name.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [BooksComponent,ChildBooksComponent, BooksNameComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[],
  exports:[BooksComponent]
})
export class BooksModule { }
