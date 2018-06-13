import { UserDrugListingComponent } from './user-drug/user-drug-listing/user-drug-listing.component';
import { UserDrugItemComponent } from './user-drug/user-drug-item/user-drug-item.component';
import { UserDrugAddComponent } from './user-drug/user-drug-add/user-drug-add.component';
import { UserDiseaseListingComponent } from './user-disease/user-disease-listing/user-disease-listing.component';
import { UserDiseaseItemComponent } from './user-disease/user-disease-item/user-disease-item.component';
import { UserDiseaseAddComponent } from './user-disease/user-disease-add/user-disease-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDrugEditComponent } from './user-drug/user-drug-edit/user-drug-edit.component';
import { TabsModule } from 'ngx-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsModule
  ],
  declarations: [UserComponent,
    LoginComponent,
    SignUpComponent
,
    UserProfileComponent,
    UserDiseaseAddComponent,
    UserDiseaseItemComponent,
    UserDiseaseListingComponent,
    UserDrugAddComponent,
    UserDrugItemComponent,
    UserDrugListingComponent,
    UserDrugEditComponent,

  
]
})
export class UserModule { }
