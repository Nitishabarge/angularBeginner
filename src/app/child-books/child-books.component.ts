import { Component , Input } from '@angular/core';
// import {Book} from '../Interface/BookType'

@Component({
  selector: 'app-child-books',
  templateUrl: './child-books.component.html',
  styleUrls: ['./child-books.component.css']
})
export class ChildBooksComponent {
 @Input() dataToChild :any
}
