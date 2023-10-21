import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: any = [];



  addService(book: any) {
    this.cart.push(book)
  }
  getService() {
    return this.cart;
  }

  removeService(book: any) {
    const index = this.cart.indexOf(book);
    this.cart.splice(index, 1);
  }
}
