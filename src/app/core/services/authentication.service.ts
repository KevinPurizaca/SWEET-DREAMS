import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, ViewChild } from "@angular/core";
import { catchError, Observable, tap, BehaviorSubject, Subscription, interval } from "rxjs";
// import { JwtHelperService } from "@auth0/angular-jwt";

import { Endpoints } from "../config/endpoints";
import { Router } from "@angular/router";
import { HttpCoreService } from "./httpCore.service";
import { ConfirmationService } from 'primeng/api';
import { environment } from "src/environments/environment";
@Injectable()
export class AuthenticationService {
  // private secretKey = environment.secretKeyEncript;

  // private jwtHelper = new JwtHelperService();
  public tokenRenovado = new BehaviorSubject(false)

  constructor(
    private router: Router,
    private httpCoreService: HttpCoreService,
  ) { }

  estaLogueado(): boolean {
    //debugger
    let token:any= localStorage.getItem('token');
    if (token == null || token=='') {
      return false;
    } else {
      return true;
      //  const isExpired = this.jwtHelper.isTokenExpired(token);
      //  this.isVerificaTiempo(token);
      //  if (isExpired) {

      //   localStorage.setItem('token', '');
      //   return false;
      // } else {
      //   return true;
      //  }
    }
  }

  logIn(data: any) {
    return this.httpCoreService.post(data, Endpoints.LOGIN).pipe(
      tap((res: any) => {
        if (res.isSuccess) {        
          let _menu = this.organizarDatosPorModulo(res.item.menu);
          let menu_forma:any[] =[]; 
          menu_forma.push({
            items:[
                ..._menu
            ]
          })
          localStorage.setItem('menu', JSON.stringify(menu_forma));
          localStorage.setItem('userdata', JSON.stringify(res.item.userdata));
          localStorage.setItem('token', res.token);


          
        //  const userDataEncriptado = CryptoJS.AES.encrypt(JSON.stringify(res.data), this.secretKey).toString();
        //  const menuEncriptado = CryptoJS.AES.encrypt(JSON.stringify(res.data.perfil.permisos), this.secretKey).toString();

        //  localStorage.setItem('token', res.tokens.access.token);
        //  localStorage.setItem('menu', JSON.stringify(res.data.perfil.permisos));
        //  localStorage.setItem('userdata', JSON.stringify(res.data));
        //  localStorage.setItem('menu', menuEncriptado);
        //  localStorage.setItem('userdata', userDataEncriptado);

        }
      })
    );
  }

  generarCodigo(data: any) {
    return this.httpCoreService.post(data, Endpoints.GENERA_CODIGO).pipe();
  }

  passwordRecover(data: any) {
    return this.httpCoreService.post(data, Endpoints.PASS_RECOVER).pipe();
  }
  logOut() {
    // localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
    localStorage.removeItem('menu');
    localStorage.removeItem('userdata');
    localStorage.removeItem('token');

  }

  verifyTokenAndLogout() {
    if (this.esTokenExpirado()) {
      this.logOut();
    }
  }

  /**
   * Este metodo sirve para verificar si el token ha sido renovado en caso que el usuario 
   * tenía varias pestañas abiertas pero renovó su token al logearse desde cualquiera de las pestañas
   */
  esTokenExpirado(): boolean {
    let token :any= localStorage.getItem('token');
    if (token == null || token=='' ) {
      return true;      
    } else {

      //return false;
      //  const isExpired = this.jwtHelper.isTokenExpired(token);
        this.isVerificaTiempo(token);
        return true;
      //  if (isExpired) {
        // localStorage.removeItem('token')
      //   localStorage.setItem('token', '');
      //   return false;
      // } else {
      //   return true;
      // }
    }
  }

  isVerificaTiempo(token:any)
  {
    const jwtToken = JSON.parse(atob(token.split('.')[1]));
       const expires = new Date(jwtToken.exp * 1000);
       const timeout = expires.getTime() - Date.now();
  }

  organizarDatosPorModulo(datos: any[]): any[] {
    const modules = [];

    datos.forEach(objeto => {
        const moduloID = objeto.iid_module;

        // Buscar si el módulo ya existe en la lista de módulos
        const moduloExistente = modules.find(modulo => modulo.label === objeto.vname_module);

        // Si el módulo no existe, agregarlo a la lista de módulos
        if (!moduloExistente) {
            modules.push({       
                iid_module : objeto.iid_module,           
                label: objeto.vname_module,
                icon: 'pi pi-'+objeto.vicon_module,
                vurl_module: objeto.vurl_module,
                vurl_module_complete: objeto.vurl_module + "/" +objeto.vurl_option.split('/')[1] ,

                items: []   
            });
        }

        // Buscar el módulo recién agregado o ya existente en la lista
        const moduloActual = modules.find(modulo => modulo.label === objeto.vname_module);

        // Agregar la opción al módulo
        moduloActual.items.push({
            label: objeto.vname_option,
            iid_module : objeto.iid_module,           
            icon: 'pi pi-' + objeto.vicon_option, // Reemplaza 'vicon_option' por el nombre real del campo de ícono
            routerLink: [objeto.vurl_module, objeto.vurl_option].join(''),// Concatena las URL del módulo y la opción
            iid_comunity : objeto.iid_comunity,
        });
    });

    return modules;
}
}