import { Component } from '@angular/core';
import { Observable,Subject,filter,map,pipe } from 'rxjs';
@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent {

//   mypromise = new Promise((resolve)=>{

// resolve(2);
// // resolve(5); // this will not work
//   });


  // myobs = new Observable((observer) => {
  //   setTimeout(()=>{
  //     observer.next(1);

  //   },1000)
  //   setTimeout(()=>{
  //     observer.next(2);

  //   },2000)
  //   setTimeout(()=>{
  //     observer.next(3);

  //   },3000)

  //   observer.next(4);
    
  // });

   myobs = new Observable<number>(
    observer =>
    observer.next(Math.random())
    
    );

     subject = new Subject();
   


ngOnInit(){
  //Observable subscribe
  this.myobs.subscribe((val)=>{

    console.log("first subscriber==",val);

  })

  this.myobs.subscribe((val)=>{
    
    console.log("Second subscriber==",val);

  })
  this.myobs.subscribe((val)=>{

    console.log("Third subscriber==",val);

  })
// Subject subscribe

this.subject.subscribe((val)=>{

  console.log("first Subject subscriber==",val);

})

this.subject.subscribe((val)=>{
  console.log("Second Subject subscriber==",val);
  

})
this.subject.subscribe((val)=>{
   
  console.log("Third Subject subscriber==",val);

})

this.subject.next(Math.random());



  //map filter piple
  // const mydata = this.myobs.pipe(
  //   filter((n:any)=>{return n % 2 == 0}),
  // );
  // mydata.subscribe(x => console.log(x));


///promise then 
//   this.mypromise.then((value)=>{

// console.log("inside promise");
// console.log(value);
//   })
}

}
