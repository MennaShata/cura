import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodAddComponent } from './food-add/food-add.component';
import { FoodListingComponent } from './food-listing/food-listing.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodEditComponent } from './food-edit/food-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    FoodAddComponent,
    FoodListingComponent,
    FoodDetailsComponent,
    FoodItemComponent,
    
,
    FoodEditComponent
]
})
export class FoodModule { }
