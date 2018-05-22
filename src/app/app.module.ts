import { FoodListingComponent } from './food/food-listing/food-listing.component';
import { FoodInteractionItemComponent } from './Interactions/Food-Interaction/Food-Interaction-Item/Food-Interaction-Item.component';
import { FoodAddComponent } from './food/food-add/food-add.component';
import { FoodItemComponent } from './food/food-item/food-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { DiseaseSmallItemComponent } from './diseases/disease-small-item/disease-small-item.component';

import {RouterModule,Routes} from '@angular/router';

import {DrugsModule} from './drugs/drugs.module';
import {DrugsComponent} from './drugs/drugs.component';
import {DrugDetailsComponent } from './drugs/drug-details/drug-details.component';
import { PillModule } from './pill/pill.module';
import { PillComponent } from './pill/pill.component';
import { PillItemComponent } from './pill/pill-item/pill-item.component';
import { PillListingComponent } from './pill/pill-listing/pill-listing.component';

import { SideEffectItemComponent } from './side-effects/side-effect-item/side-effect-item.component';
import { ActiveIngrediantItemComponent } from 'src/app/active-ingredients/active-ingrediant-item/active-ingrediant-item.component';
import { SideEffectListingComponent } from './side-effects/side-effect-listing/side-effect-listing.component';
import { ActiveIngredientListingComponent } from 'src/app/active-ingredients/active-ingredient-listing/active-ingredient-listing.component';
import { FoodInteractionsListingComponent } from './Interactions/Food-Interaction/Food-Interactions-Listing/Food-Interactions-Listing.component';
import { PillService } from './shared/services/Pill.service';


const routes: Routes = [
  { path:'pill/item', component: PillComponent},
  { path: 'drug/listing', component: DrugsComponent},
  { path: 'drug/detail/:id', component: DrugDetailsComponent},
  { path: 'food', component: FoodItemComponent},
  { path: 'food/add', component: FoodAddComponent},
  { path: 'sideeffectlisting', component: SideEffectListingComponent},
  { path: 'interactions/foodinteraction', component: FoodInteractionItemComponent},
  { path: 'ai', component: ActiveIngrediantItemComponent},
  { path: 'food/foodlist', component: FoodListingComponent},
  { path: 'interactions/foodinteraction/listing', component: FoodInteractionsListingComponent},
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DiseaseSmallItemComponent,  
    FoodItemComponent,
    FoodAddComponent,
    FoodInteractionItemComponent,
    SideEffectItemComponent,
    ActiveIngrediantItemComponent,
    SideEffectListingComponent,
    FoodListingComponent,
    FoodInteractionsListingComponent
  ],
  imports: [
    BrowserModule,
    DrugsModule,
    PillModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
