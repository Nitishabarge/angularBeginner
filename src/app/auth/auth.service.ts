import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean= false;
  constructor(private router: Router) { }

  login(form: any) {

    if (form.email === "nitisha@gmail.com" && form.password === "12345") {
       this.isAuthenticated = true;
       console.log('I am here Gaurav barge');
       this.router.navigate([''])
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['login']);
  }
}
