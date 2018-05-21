import { FoodItemComponent } from './food/food-item/food-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PillListingComponent } from './pill/pill-listing/pill-listing.component';
import {RouterModule,Routes} from '@angular/router';
import {DrugsModule} from './drugs/drugs.module';
import {DrugsComponent} from './drugs/drugs.component';
import { PillItemComponent } from './pill/pill-item/pill-item.component';
import { SideEffectItemComponent } from './side-effects/side-effect-item/side-effect-item.component';
import { ActiveIngrediantItemComponent } from 'src/app/active-ingredients/active-ingrediant-item/active-ingrediant-item.component';
import { DiseaseSmallItemComponent } from './diseases/disease-small-item/disease-small-item.component';
import { DiseaseLisingComponent } from './diseases/disease-lising/disease-lising.component';
import { DiseaseComponentComponent } from './diseases/disease-component/disease-component.component';
import { FilterComponent } from './shared/filter/filter.component';
const routes: Routes = [
  { path: '',component:AppComponent },
  { path: 'drug/listing', component: DrugsComponent},
  { path: 'food', component: FoodItemComponent},
  {path :'sideeffect', component:SideEffectItemComponent },
  { path:'ai', component: ActiveIngrediantItemComponent},
  { path:'disease', component: DiseaseSmallItemComponent},
  { path:'diseaseListing', component:DiseaseLisingComponent},
  {path:'diseaseComponent', component:DiseaseComponentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PillListingComponent,
    PillItemComponent,
    FoodItemComponent,
    SideEffectItemComponent,
    ActiveIngrediantItemComponent,
    DiseaseSmallItemComponent,
    DiseaseLisingComponent,
    DiseaseComponentComponent,
    FilterComponent
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
