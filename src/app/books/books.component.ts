import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BooksServiceService } from './books-service.service';
import { ChildBooksComponent } from './child-books/child-books.component';
//import {Book} from '../Interface/BookType'
import {Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements AfterViewInit {

@ViewChild(ChildBooksComponent) child !: ChildBooksComponent;

message:string= "";
books : any = [

]
  constructor(private  booksService : BooksServiceService,private cd : ChangeDetectorRef,private router:Router){

    this.books = this.booksService.getBooks();
  }
  ngAfterViewInit(): void {
    this.message = this.child.DataToParent;
    this.cd.detectChanges();
  }

  goToObservable(data : any){
 this.router.navigate(['/observable',data])

//this.router.navigate(['/observable',{queryParams:"nitisha"}])
  }
 
  isShowing:boolean= true;


  ngOnInit(){
this.goToObservable({data:"nitisha"});
  }
}
