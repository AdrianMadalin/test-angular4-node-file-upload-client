import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import {routes} from "./app-routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ValidateService} from "./services/validate.service";
import {FlashMessagesModule} from "angular2-flash-messages";
import {AuthService} from "./services/auth.service";
import {HttpModule} from "@angular/http";
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UploadComponent } from './component/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    PageNotFoundComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routes,
    FlashMessagesModule,
    HttpModule
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
