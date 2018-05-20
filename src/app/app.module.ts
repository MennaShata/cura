import { FoodInteractionItemComponent } from './Interactions/Food-Interactions/Food-Interaction-Item/Food-Interaction-Item.component';
import { FoodAddComponent } from './food/food-add/food-add.component';
import { FoodItemComponent } from './food/food-item/food-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PillListingComponent } from './pill/pill-listing/pill-listing.component';
import {RouterModule,Routes} from '@angular/router';
import {DrugsModule} from './drugs/drugs.module';
import {DrugsComponent} from './drugs/drugs.component';
import { PillItemComponent } from './pill/pill-item/pill-item.component';
const routes: Routes = [
  { path: '',component:AppComponent },
  { path: 'drug/listing', component: DrugsComponent},
  { path: 'food', component: FoodItemComponent},
  { path: 'food/add', component: FoodAddComponent},
  { path: 'interactions/foodinteractions', component: FoodInteractionItemComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PillListingComponent,
    PillItemComponent,
    FoodItemComponent,
    FoodAddComponent,
    FoodInteractionItemComponent
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
