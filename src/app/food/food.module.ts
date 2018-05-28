import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodAddComponent } from './food-add/food-add.component';
import { FoodListingComponent } from './food-listing/food-listing.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FoodAddComponent,
    FoodListingComponent,
    FoodDetailsComponent,
    FoodItemComponent,
    
]
})
export class FoodModule { }
