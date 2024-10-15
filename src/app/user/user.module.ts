import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { EmailLoginComponent } from './email-login/email-login.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { GoogleSigninDirective } from './google-signin.directive';


@NgModule({
  declarations: [
    LoginPageComponent,
    EmailLoginComponent,
    GoogleSigninDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
