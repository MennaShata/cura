import { FoodInteractionItemComponent } from "./../Food-Interaction/Food-Interaction-Item/Food-Interaction-Item.component";
import { FoodInteractionsListingComponent } from "./../Food-Interaction/Food-Interactions-Listing/Food-Interactions-Listing.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FoodInteractionComponent } from "./food-Interaction.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    FoodInteractionComponent,
    FoodInteractionsListingComponent,
    FoodInteractionItemComponent,
    
  ]
})
export class FoodInteractionModule {}
