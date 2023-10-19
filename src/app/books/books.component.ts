import { Component } from '@angular/core';
import { BooksServiceService } from './books-service.service';
//import {Book} from '../Interface/BookType'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  constructor(private  booksService : BooksServiceService){

    this.books = this.booksService.getBooks();
  }
  books : any = [

  ]
  isShowing:boolean= true;

  AddtoCart(event:any){

    console.log("I Am inside parent",event);

  }

  ngOnInit(){

alert("hello")


  }
}
