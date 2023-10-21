import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'     //It means this service is global,no need to import in add module provider
// })

//To make this service private to specific module like book.module here we should remove providedIn from here , and import it in book.module provider

@Injectable({
  providedIn:'platform'
})

export class BooksServiceService {

  constructor() { }

  getBooks(){
return [
    {
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
];
  }

}
