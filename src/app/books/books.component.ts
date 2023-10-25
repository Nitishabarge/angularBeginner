import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BooksServiceService } from './books-service.service';
import { ChildBooksComponent } from './child-books/child-books.component';
//import {Book} from '../Interface/BookType'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements AfterViewInit {

@ViewChild(ChildBooksComponent) child !: ChildBooksComponent;

message:string= "";
  constructor(private  booksService : BooksServiceService,private cd : ChangeDetectorRef){

    this.books = this.booksService.getBooks();
  }
  ngAfterViewInit(): void {
    this.message = this.child.DataToParent;
    this.cd.detectChanges();
  }
  books : any = [

  ]
  isShowing:boolean= true;


  ngOnInit(){

  }
}
