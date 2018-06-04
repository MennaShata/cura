import { FoodEditComponent } from './food/food-edit/food-edit.component';
import { FoodListingComponent } from './food/food-listing/food-listing.component';
import { FoodInteractionItemComponent } from './Interactions/Food-Interaction/Food-Interaction-Item/Food-Interaction-Item.component';
import { FoodAddComponent } from './food/food-add/food-add.component';
import { FoodItemComponent } from './food/food-item/food-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { PillListingComponent } from './pill/pill-listing/pill-listing.component';
import {RouterModule,Routes,ActivatedRoute} from '@angular/router';
import {DrugsModule} from './drugs/drugs.module';
import {DrugsComponent} from './drugs/drugs.component';
import {DrugDetailsComponent} from './drugs/drug-details/drug-details.component';
import {DrugAddComponent} from './drugs/drug-add/drug-add.component';
import { PillModule } from './pill/pill.module';
import { PillComponent } from './pill/pill.component';
import { PillItemComponent } from './pill/pill-item/pill-item.component';

import { SideEffectItemComponent } from './side-effects/side-effect-item/side-effect-item.component';
import { FormsModule ,ReactiveFormsModule }   from '@angular/forms';
import { DiseaseSmallItemComponent } from './diseases/disease-small-item/disease-small-item.component';
import { DiseaseLisingComponent } from './diseases/disease-lising/disease-lising.component';
import { DiseaseComponentComponent } from './diseases/disease-component/disease-component.component';
import { DiseaseModule } from './diseases/disease.module';
import { SideEffectListingComponent } from './side-effects/side-effect-listing/side-effect-listing.component';
import { FoodInteractionsListingComponent } from './Interactions/Food-Interaction/Food-Interactions-Listing/Food-Interactions-Listing.component';
import { SingleFoodInteractionComponent } from './Interactions/food-Interaction/Single-Food-Interaction/Single-Food-Interaction.component';
import { DiseaseServiceService } from './shared/services/disease-service.service';
import { SideEffectsComponent } from './side-effects/side-effects.component';
import { DiseaseDetailsComponent } from './diseases/disease-details/disease-details.component';
import { ForbiddenDrugsComponent } from './diseases/forbidden-drugs/forbidden-drugs.component';
import { TreatedDrugsComponent } from './diseases/treated-drugs/treated-drugs.component';
import { OneTreatedDrugComponent } from './diseases/one-treated-drug/one-treated-drug.component';
import { OneForbiddenDrugComponent } from './diseases/one-forbidden-drug/one-forbidden-drug.component';

import { ActiveIngredientService } from './shared/services/active-ingredient/active-ingredient.service';
import { ActiveIngredientDetailsComponent } from './active-ingredients/active-ingredient-details/active-ingredient-details.component';
import { ActiveIngrediantItemComponent } from './active-ingredients/active-ingrediant-item/active-ingrediant-item.component';
import { ActiveIngredientAddComponent } from 'src/app/active-ingredients/active-ingredient-add/active-ingredient-add.component';
import { ActiveIngredientListingComponent } from './active-ingredients/active-ingredient-listing/active-ingredient-listing.component';
import { ActiveIngredientModule } from './active-ingredients/active-ingredient.module';

import { SideEffectModule } from './side-effects/side-effect.module';
import { SharedModule } from './shared/shared.module';
import { DiseaseAddComponent } from './diseases/disease-add/disease-add.component';
import { HomeComponent } from './Home/Home.component';
import { SideEffectAddComponent } from './side-effects/side-effect-add/side-effect-add.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap';
import { DiseaseEditComponent } from './diseases/disease-edit/disease-edit.component';
import { PillEditComponent } from './pill/pill-edit/pill-edit.component';
import {DrugListingComponent} from './drugs/drug-listing/drug-listing.component';
import { DrugInteractionComponent } from './Interactions/drug-interaction/drug-interaction.component';
import { DrugInteractionModule } from './Interactions/drug-interaction/drug-interaction.module';
import { CommunitiesModule } from './communities/communities.module';
import { PostListingComponent } from './communities/post-listing/post-listing.component';
import { CommunitiesComponent } from './communities/communities.component';
import { CommunityDetailsComponent } from './communities/community-details/community-details.component';
import { CommunityListingComponent } from './communities/community-listing/community-listing.component';



const routes: Routes = [
  {path :'', component : HomeComponent},
  {path:'drug',children:[
    { path: 'listing', component: DrugListingComponent },
    { path:'details/:id' , component :DrugDetailsComponent},
    { path:'addDrug' , component:DrugAddComponent},
    { path:'editDrug/:id' , component:DrugAddComponent},
    {path : 'interaction' , component:DrugInteractionComponent}
  ]},
  
  { path: 'food', component: FoodItemComponent},
  { path: 'food/add', component: FoodAddComponent},
  { path: 'sideeffectlisting', component: SideEffectListingComponent},
  { path: 'sideeffectlisting2', component: SideEffectsComponent},
  { path:'addsideeffect' , component:SideEffectAddComponent},
  { path: 'interactions/foodinteraction', component: FoodInteractionItemComponent},
  {path :'sideeffect', component:SideEffectItemComponent },

  {path:'activeingredient',children:[
    { path:'listing', component: ActiveIngredientListingComponent},
    { path:'details/:id' , component :ActiveIngredientDetailsComponent},
    { path:'addActiveIngredient' , component:ActiveIngredientAddComponent},
    { path:'editActiveIngredient/:id' , component:ActiveIngredientAddComponent},
  ]},

  { path:'food/foodlist', component: FoodListingComponent},
  { path:'interactions/foodinteraction/listing', component: FoodInteractionsListingComponent},
  { path:'interactions/foodinteraction/page/:id', component: SingleFoodInteractionComponent},
  
  { path:'interactions/foodinteraction/page', component: SingleFoodInteractionComponent},
  // {path:'diseaseDetails', component:DiseaseDetailsComponent},
  { path:"diseaseComponent" ,component:DiseaseComponentComponent},
  { path:"diseaseListing" ,component:DiseaseLisingComponent},
  // { path:"diseaseEdit" ,component:DiseaseEditComponent},
  { path:"diseaseEdit/:id" ,component:DiseaseEditComponent},

  
  { path:'diseaseDetails/:id' , component :DiseaseDetailsComponent},
  { path:'diseaseAdd' , component :DiseaseAddComponent},
  { path:'communityComponent' , component :CommunitiesComponent},
  { path:'postListing' , component :PostListingComponent},
  { path:'communityListing' , component :CommunityListingComponent},
  { path:'communityDetails' , component :CommunityDetailsComponent},
  
  { path:'addFood' , component :FoodAddComponent},
  { path:'editFood/:id' , component :FoodEditComponent},

  {path:'pill',children:[
    { path:'page', component: PillComponent},
    { path:'listing', component: PillListingComponent},
    { path:'details/:id' , component :DrugDetailsComponent},
    { path:'addPill' , component: DrugAddComponent},
    { path:'editPill/:id' , component: PillEditComponent},
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    DiseaseSmallItemComponent,
    FoodItemComponent,
    FoodAddComponent,
    FoodInteractionItemComponent,
    DiseaseAddComponent,
    FoodListingComponent,
    FoodInteractionsListingComponent,
    SingleFoodInteractionComponent,
    DiseaseComponentComponent,
    DiseaseLisingComponent,
    DiseaseDetailsComponent,
    ForbiddenDrugsComponent,
    TreatedDrugsComponent,
    OneTreatedDrugComponent,
    OneForbiddenDrugComponent,
    HomeComponent,
    DiseaseAddComponent,
    FoodAddComponent,
    DiseaseEditComponent,
    FoodEditComponent
],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    DrugsModule,
    DrugInteractionModule,
    FormsModule,
    ReactiveFormsModule,
    PillModule,
    RouterModule,
    ActiveIngredientModule,
    SideEffectModule,
    SharedModule,
    CommunitiesModule,
    [ReactiveFormsModule],
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DiseaseServiceService,
    ActiveIngredientService,
    BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
