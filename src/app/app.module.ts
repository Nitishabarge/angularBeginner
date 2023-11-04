import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { ChildBooksComponent } from './books/child-books/child-books.component';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
import { AuthModuleModule } from './auth/auth-module/auth-module.module';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { BooksDetailComponent } from './books/books-detail/books-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ObservableExampleComponent,
    BooksDetailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BooksModule,
    AuthModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
