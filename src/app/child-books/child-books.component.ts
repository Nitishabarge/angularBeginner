import { Component , EventEmitter, Input,Output } from '@angular/core';
// import {Book} from '../Interface/BookType'

@Component({
  selector: 'app-child-books',
  templateUrl: './child-books.component.html',
  styleUrls: ['./child-books.component.css']
})
export class ChildBooksComponent {
 @Input() dataToChild :any;

 @Output() dataEmitter = new EventEmitter<any>();


  AddToCart(){
  // console.log("hello");
  // console.log(this.dataToChild);
  this.dataEmitter.emit(this.dataToChild);
 }

 ngOnDestroy(){

console.log("hahahah destoryed!!")

 }
}
