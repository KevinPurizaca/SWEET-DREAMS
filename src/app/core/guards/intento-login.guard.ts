import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";


@Injectable({
  providedIn: 'root'
})
export class IntentoLoginGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.esTokenExpirado()) {      
      return true
    } else {
      this.router.navigate(['/inicio/home']);
      return false
    }   
  }
}