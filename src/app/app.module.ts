import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './views/components/notfound/notfound.component';
import { SharedModule } from './shared/shared.module';
import { HttpCoreService } from './core/services/httpCore.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthenticationService } from './core/services/authentication.service';
import { UtilService } from './core/util/util.services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';
import { IconService } from './demo/service/icon.service';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

        { provide: LocationStrategy, useClass: PathLocationStrategy },
        SharedModule,
        IconService,

        HttpCoreService,
        MessageService,
        ConfirmationService,
        AuthenticationService,
        UtilService 
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule {}
