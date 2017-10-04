import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from "./component/login/login.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {RegisterComponent} from "./component/register/register.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {UploadComponent} from "./component/upload/upload.component";

const appRoutes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "profile", component: ProfileComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "upload", component: UploadComponent},
  {path: "not-found", component: PageNotFoundComponent},
  {path: '**',  redirectTo: '/not-found', pathMatch: 'full'}
];

export const routes = RouterModule.forRoot(appRoutes);
