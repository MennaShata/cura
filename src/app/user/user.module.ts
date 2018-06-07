import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent,
    LoginComponent,
    SignUpComponent
]
})
export class UserModule { }
