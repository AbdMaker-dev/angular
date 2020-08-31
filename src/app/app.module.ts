
// -------------app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { AccueilAprenantComponent } from './accueil-aprenant/accueil-aprenant.component';
import { AccueilCmComponent } from './accueil-cm/accueil-cm.component';
import { AccueilFormateurComponent } from './accueil-formateur/accueil-formateur.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';

import { AuthService } from './interceptors/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResgisterComponent,
    AccueilAprenantComponent,
    AccueilCmComponent,
    AccueilFormateurComponent,
    AccueilAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return localStorage.getItem('auth_tkn');}
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
