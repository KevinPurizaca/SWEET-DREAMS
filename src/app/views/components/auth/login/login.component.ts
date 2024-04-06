import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CommonService } from 'src/app/core/services/common.service';
import { UtilService } from 'src/app/core/util/util.services';
import * as sha512 from 'js-sha512';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    standalone: true,
    imports: [
        SharedModule        
    ],
    providers: [UtilService ],
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    password!: string;
    isLoading = false;
  
    req = {
        vchannel_twitch_user: '',
        vpassword_user: '',
    };
  

    valCheck: string[] = ['remember'];

    constructor(
        public layoutService: LayoutService,
        private router: Router,
        private authService: AuthenticationService,
        private commonService: CommonService,
        private utilService:UtilService,
    ) { }


    login() {
        if(this.authService.estaLogueado()){
          this.router.navigate(['/inicio/home']);
          return;
        }
        
        let _req = {
            vchannel_twitch_user: this.req.vchannel_twitch_user,
          vpassword_user: sha512.sha512(this.req.vpassword_user).toString().toUpperCase(),      
        };
    
        if (!(this.req.vchannel_twitch_user == '' || this.req.vchannel_twitch_user == undefined) && !(this.req.vpassword_user == '' || this.req.vpassword_user == undefined)) {
          this.isLoading = true;
          this.authService.logIn(_req).subscribe(res => {
            if (!res.isSuccess) {
              this.isLoading = false;
              this.commonService.HanddleErrorMessage(res);
            } else {
              //const iid_perfil = this.utilService.getItemStorage('userdata').iid_perfil; //JSON.parse(localStorage.getItem('userdata') || '{}').iid_perfil;
    
              const iid_perfil =  this.utilService.getItemStorage('userdata').iid_perfil;
              const ruta = '/inicio/home';
              this.router.navigate([ruta]);      
            }
          },
            (error: any) => {
              this.isLoading = false;
              this.commonService.HanddleErrorMessage(error);
            }
          );
        } else {
          this.isLoading = false;
          this.commonService.HanddleErrorMessage('Ingrese Información de Usuario');
        }
      } 

}
