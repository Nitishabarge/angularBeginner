import { Component } from '@angular/core';
import { BehaviorSubject, Observable,Subject,filter,map,pipe } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent {
  data = "";

constructor(private route:ActivatedRoute){
 

  this.route.params.subscribe(params=>{
this.data = params['data']

  })
  console.log("data===",this.data)

}


     subject = new Subject();
   


ngOnInit(){
  

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

}

}
