import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent {

  mypromise = new Promise((resolve)=>{

resolve(2);
// resolve(5); // this will not work
  });


  myobs = new Observable((observer) => {
    setTimeout(()=>{
      observer.next(1);

    },1000)
    setTimeout(()=>{
      observer.next(2);

    },2000)
    setTimeout(()=>{
      observer.next(3);

    },3000)
    
  });

ngOnInit(){
  //Observable subscribe
  this.myobs.subscribe((val)=>{

    console.log(val);

  })
///promise then 
  this.mypromise.then((value)=>{

console.log("inside promise");
console.log(value);
  })
}

}
