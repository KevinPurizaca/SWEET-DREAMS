import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";


@Injectable({
  providedIn: 'root'
})
export class UserLoggedGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    if (this.authService.esTokenExpirado()) {

      const allowedRoutes = ['inicio', 'Administration', 'Masters', 'Group-Comunity', 'Reports'];

      const currentRoute = state.url.split('/')[1];

      if (allowedRoutes.includes(currentRoute) /*&& currentRoute2 != undefined*/) {        
              const estaLogueado = this.authService.estaLogueado();

      if(estaLogueado){
          return true;
        }
        else{
          this.router.navigate(['/login']);
          return false;
        }
      }
      else{
        this.router.navigate(['/pages/notfound']);
        return false
      }
    } else {
       this.router.navigate(['/login']);    
      return false;
    }

  }
}