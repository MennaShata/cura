import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveIngredientAddComponent } from './active-ingredient-add/active-ingredient-add.component';
import { ActiveIngredientListingComponent } from './active-ingredient-listing/active-ingredient-listing.component';
import { ActiveIngrediantItemComponent } from './active-ingrediant-item/active-ingrediant-item.component';
import { ActiveIngredientDetailsComponent } from './active-ingredient-details/active-ingredient-details.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import { ActiveIngrediantWithoutComponent } from './ActiveIngrediant-without/ActiveIngrediant-without.component';
import { TypeaheadModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    MatSelectModule,
    FormsModule,
    [TypeaheadModule.forRoot()]
    
  ],
  declarations: [
    ActiveIngredientAddComponent,
    ActiveIngredientListingComponent,
    ActiveIngrediantItemComponent,
    ActiveIngredientDetailsComponent,
    ActiveIngrediantWithoutComponent
,
    ActiveIngrediantWithoutComponent
],
exports:[
  ActiveIngrediantItemComponent,
  ActiveIngrediantWithoutComponent
]
})
export class ActiveIngredientModule { }
