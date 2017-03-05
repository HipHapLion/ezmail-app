import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from "angular2-flash-messages";

import { DashboardComponent } from './dashboard/dashboard-component/dashboard.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MailViewComponent } from './mail-view/mail-view/mail-view.component';
import { SidebarComponent } from './mail-view/sidebar/sidebar.component';
import { ComposeComponent } from "./compose/compose-component/compose.component";
import { UserAccountComponent } from './components/user-account/user-account.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from "./services/auth.service";

import { AuthGuard } from './guards/auth.guard';
import { OverviewComponent } from './components/overview/overview.component';

// import 

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'mail-view', component: MailViewComponent, canActivate: [AuthGuard] },
  { path: 'compose', component: ComposeComponent, canActivate: [AuthGuard] },
  { path: 'user-account', component: UserAccountComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MailViewComponent,
    SidebarComponent,
    DashboardComponent,
    ComposeComponent,
    UserAccountComponent,
    DashboardComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
