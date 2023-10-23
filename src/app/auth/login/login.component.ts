import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  form: any = {
    email: "",
    password: ""

  }
  onSubmit(){

    console.log("form submiteed");
    console.log(this.form);
  }
}
