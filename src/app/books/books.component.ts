import { Component } from '@angular/core';

interface book {
name:string,
author:string,
src:string

}
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

   books : book[] = [{
    name :"Fourth Wing",
    author:"Rebecca Yarros",
    src:"https://m.media-amazon.com/images/I/81im9aAFBOL._SL1500_.jpg",
  },
  {
    name :"No Brainer",
    author:"Jeff Kinney",
    src:"https://m.media-amazon.com/images/I/71pL+3nMzfL._SL1475_.jpg",
  },
  {
    name :"Spooky Pookie",
    author:"Sandra Boynton",
    src:"https://m.media-amazon.com/images/I/618INpEnVjL._SL1500_.jpg",
  }

  ]


// isDisabled=false;
// textname="";
}
