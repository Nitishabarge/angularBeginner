import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BooksServiceService } from '../books-service.service';
@Component({
  selector: 'app-books-name',
  templateUrl: './books-name.component.html',
  styleUrls: ['./books-name.component.css']
})
export class BooksNameComponent {
  books : any = [

  ]
constructor(private  booksService : BooksServiceService){

  this.books = this.booksService.getBooks();

}

}
