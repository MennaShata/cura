import { FoodListingComponent } from './food/food-listing/food-listing.component';
import { FoodInteractionItemComponent } from './Interactions/Food-Interaction/Food-Interaction-Item/Food-Interaction-Item.component';
import { FoodAddComponent } from './food/food-add/food-add.component';
import { FoodItemComponent } from './food/food-item/food-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DiseaseSmallItemComponent } from './diseases/disease-small-item/disease-small-item.component';
import { PillListingComponent } from './pill/pill-listing/pill-listing.component';
import {RouterModule,Routes} from '@angular/router';
import {DrugsModule} from './drugs/drugs.module';
import {DrugsComponent} from './drugs/drugs.component';
import { PillItemComponent } from './pill/pill-item/pill-item.component';
import { SideEffectItemComponent } from './side-effects/side-effect-item/side-effect-item.component';
import { ActiveIngrediantItemComponent } from 'src/app/active-ingredients/active-ingrediant-item/active-ingrediant-item.component';
import { ActiveIngredientListingComponent } from 'src/app/active-ingredients/active-ingredient-listing/active-ingredient-listing.component';
import { FoodInteractionsListingComponent } from './Interactions/Food-Interaction/Food-Interactions-Listing/Food-Interactions-Listing.component';

const routes: Routes = [
  { path: '',component:AppComponent },
  { path: 'drug/listing', component: DrugsComponent},
  { path: 'food', component: FoodItemComponent},
  { path: 'food/add', component: FoodAddComponent},
  { path: 'interactions/foodinteraction', component: FoodInteractionItemComponent},
  {path :'sideeffect', component:SideEffectItemComponent },
  { path:'ai', component: ActiveIngrediantItemComponent},
  { path:'food/foodlist', component: FoodListingComponent},
  { path:'interactions/foodinteraction/listing', component: FoodInteractionsListingComponent}
];
@NgModule({
  declarations: [
    AppComponent,

    DiseaseSmallItemComponent,
    PillListingComponent,
    PillItemComponent,
    FoodItemComponent,
    FoodAddComponent,
    FoodInteractionItemComponent,
    SideEffectItemComponent,
    ActiveIngrediantItemComponent,
    ActiveIngredientListingComponent,
    FoodListingComponent,
    FoodInteractionsListingComponent
    

  ],
  imports: [
    BrowserModule,
    DrugsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
