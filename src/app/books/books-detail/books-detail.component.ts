import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent {
  myid = '';
constructor(private route : ActivatedRoute){
  this.route.params.subscribe(params=>{
    console.log("nitisha helo=",params['id']);
   this.myid = params['id'];
  })
}
}
