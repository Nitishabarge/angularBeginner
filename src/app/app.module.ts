import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { ChildBooksComponent } from './child-books/child-books.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ChildBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
