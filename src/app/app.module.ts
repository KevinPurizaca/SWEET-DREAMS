import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './views/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { SharedModule } from './shared/shared.module';
import { HttpCoreService } from './core/services/httpCore.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthenticationService } from './core/services/authentication.service';
import { UtilService } from './core/util/util.services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
        SharedModule,
        
        HttpCoreService,
        MessageService,
        ConfirmationService,
        AuthenticationService,
        UtilService 
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
