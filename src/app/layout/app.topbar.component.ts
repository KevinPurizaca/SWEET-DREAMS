import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { UtilService } from '../core/util/util.services';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    userData: any;

    items!: MenuItem[];
    items2: MenuItem[] | undefined;

    showSidebar: boolean = false;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    icon:string ='';


    constructor(
        public layoutService: LayoutService, 
        private authService: AuthenticationService,
        private utilService:UtilService,
    ) 
    {
        let theme = localStorage.getItem('theme_admin') ||'saga-blue';//sino existe lo cambiamos a tema por defecto
        this.icon = theme === 'saga-blue'?'pi pi-moon':'pi pi-sun';

        const newColor =  theme === 'saga-blue'? 'light': 'dark';//light':'dark';
        this.changeTheme(theme, newColor);

        this.getUserLocalStorage();

        
    }

    changeTheme(theme: string, colorScheme: string) {
       
        this.theme = theme;
        this.colorScheme = colorScheme;
    }
    changeThemeDarkLight(){
        let theme = localStorage.getItem('theme_admin') ||'saga-blue';//sino existe lo cambiamos a tema por defecto

        const newColor = theme === 'saga-blue' ?'dark':'light';
        const newTheme = theme === 'saga-blue' ? 'arya-blue' : 'saga-blue';

        localStorage.setItem('theme_admin',newTheme);
        this.icon = newTheme === 'saga-blue' ?'pi pi-moon':'pi pi-sun';
        this.changeTheme(newTheme, newColor);

    }

    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }
    get theme(): string {
        return this.layoutService.config().theme;
    }

    set colorScheme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: val,
        }));
    }
    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    
    getUserLocalStorage() {
        const userdata =  this.utilService.getItemStorage('userdata');
    
        if(userdata){
          if (Object.keys(userdata).length > 0) {
            this.userData = userdata;
          }
        }  
      }
      showProfileSidebar() {
        this.showSidebar = true;
      }
    
    
      LogOut() {
        this.authService.logOut();
      }
}
