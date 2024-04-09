import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
})
export class NotfoundComponent  implements OnInit {


    constructor
    (
    ) { }
    ngOnInit() {
        this.goToHome()
    }
    
    urlRegresar:string='';
    goToHome():void{

        let token :any= localStorage.getItem('token');
        if (token == null || token=='' ) {
            this.urlRegresar = '#/login';   
        } else {
            this.urlRegresar = '#/inicio/home';
       }
    }
 }