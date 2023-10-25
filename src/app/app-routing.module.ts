import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { authGuard } from './auth/auth.guard';
import { ObservableExampleComponent } from './observable-example/observable-example.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"books",component:BooksComponent,canActivate:[authGuard]},
  {path:"cart",component:CartComponent,canActivate:[authGuard]},
  {path:"register",component:RegisterComponent},
  {path:"observable",component:ObservableExampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
