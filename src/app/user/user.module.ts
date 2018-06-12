import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [UserComponent,
    LoginComponent,
    SignUpComponent
,
    UserProfileComponent,
  
]
})
export class UserModule { }
