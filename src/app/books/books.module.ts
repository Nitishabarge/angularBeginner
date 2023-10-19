import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
// import { FormsModule } from '@angular/forms';
import { ChildBooksComponent } from './child-books/child-books.component';


@NgModule({
  declarations: [BooksComponent,ChildBooksComponent],
  imports: [
    CommonModule
  ],
  exports:[BooksComponent]
})
export class BooksModule { }
