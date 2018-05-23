import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveIngredientAddComponent } from './active-ingredient-add/active-ingredient-add.component';
import { ActiveIngredientListingComponent } from './active-ingredient-listing/active-ingredient-listing.component';
import { ActiveIngrediantItemComponent } from './active-ingrediant-item/active-ingrediant-item.component';
import { ActiveIngredientDetailsComponent } from './active-ingredient-details/active-ingredient-details.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ActiveIngredientAddComponent,
    ActiveIngredientListingComponent,
    ActiveIngrediantItemComponent,
    ActiveIngredientDetailsComponent
]
})
export class ActiveIngredientModule { }
