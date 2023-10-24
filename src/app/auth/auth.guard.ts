import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
let _authService = inject(AuthService);
let _router = inject(Router);
if(_authService.isAuthenticated == false){
  _router.navigate(['']);
}
return _authService.isAuthenticated;
};
