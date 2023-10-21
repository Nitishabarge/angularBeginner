import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
// import { FormsModule } from '@angular/forms';
import { ChildBooksComponent } from './child-books/child-books.component';
import { BooksServiceService } from './books-service.service';


@NgModule({
  declarations: [BooksComponent,ChildBooksComponent],
  imports: [
    CommonModule
  ],
  providers:[],
  exports:[BooksComponent]
})
export class BooksModule { }
