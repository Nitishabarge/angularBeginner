import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

cart :any = [];



  addService(book:any){
console.log("i am inside service",book)
this.cart.push(book)
  }
  getService(book:any){
    return book;
  }
}
