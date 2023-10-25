import { Component , EventEmitter, Input,Output } from '@angular/core';
import { BooksServiceService } from '../books-service.service';
import { CartService } from 'src/app/services/cart.service';
// import {Book} from '../Interface/BookType'

@Component({
  selector: 'app-child-books',
  templateUrl: './child-books.component.html',
  styleUrls: ['./child-books.component.css']
})
export class ChildBooksComponent {
 @Input() dataToChild :any;
 constructor(private  booksService : BooksServiceService, private cartService:CartService){}
isInCart :boolean = false;
DataToParent:string ="send data to parent with viewchild";
  AddToCart(){
   this.cartService.addService(this.dataToChild);
   this.isInCart = true;
 }
 removeFromCart(){
  this.cartService.removeService(this.dataToChild);
  this.isInCart = false;
 }

}
