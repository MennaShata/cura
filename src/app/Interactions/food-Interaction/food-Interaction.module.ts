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
<<<<<<< HEAD
    FoodInteractionItemComponent,
    
=======
    FoodInteractionItemComponent
  ],
  exports:[
    FoodInteractionItemComponent
>>>>>>> a1490f02dbcb0ddd827bc74a27d36f944d686b7c
  ]
})
export class FoodInteractionModule {}
