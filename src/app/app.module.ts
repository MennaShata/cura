import { UserDiseaseAddComponent } from './user/user-disease/user-disease-add/user-disease-add.component';
import { UserDrugItemComponent } from './user/user-drug/user-drug-item/user-drug-item.component';
import { UserDrugEditComponent } from './user/user-drug/user-drug-edit/user-drug-edit.component';
import { UserDrugAddComponent } from './user/user-drug/user-drug-add/user-drug-add.component';
import { FoodService } from './shared/services/food.service';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { FoodEditComponent } from './food/food-edit/food-edit.component';
import { FoodListingComponent } from './food/food-listing/food-listing.component';
import { FoodInteractionItemComponent } from './Interactions/Food-Interaction/Food-Interaction-Item/Food-Interaction-Item.component';
import { FoodAddComponent } from './food/food-add/food-add.component';
import { FoodItemComponent } from './food/food-item/food-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';

import {RouterModule,Routes,ActivatedRoute} from '@angular/router';
import {DrugsModule} from './drugs/drugs.module';
import {DrugsComponent} from './drugs/drugs.component';
import {DrugDetailsComponent} from './drugs/drug-details/drug-details.component';
import {DrugAddComponent} from './drugs/drug-add/drug-add.component';
import { PillModule } from './pill/pill.module';
import { PillComponent } from './pill/pill.component';
import { PillItemComponent } from './pill/pill-item/pill-item.component';
import { PillListingComponent } from './pill/pill-listing/pill-listing.component';
import { PillEditComponent } from './pill/pill-edit/pill-edit.component';

import { NewsModule } from './news/news.module';
import { NewsComponent } from './news/news.component';
import { NewsListingComponent } from './news/news-listing/news-listing.component';
import { NewsDetailsComponent} from './news/news-details/news-details.component';
import { NewsAddComponent } from './news/news-add/news-add.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';

import { SideEffectItemComponent } from './side-effects/side-effect-item/side-effect-item.component';
import { FormsModule ,ReactiveFormsModule, FormGroup, FormControl }   from '@angular/forms';
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
import { SideEffectAddComponent } from './side-effects/side-effect-add/side-effect-add.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap';
import { DiseaseEditComponent } from './diseases/disease-edit/disease-edit.component';

import {DrugListingComponent} from './drugs/drug-listing/drug-listing.component';
import { DrugInteractionListingComponent} from './Interactions/drug-interaction/drug-Interaction-Listing/drug-Interaction-Listing.component';
import { DrugInteractionModule } from './Interactions/drug-interaction/drug-interaction.module';
import { CommunitiesModule } from './communities/communities.module';
import { DrugInteractionService } from './shared/services/drugInteraction/drugInteraction.service';
import { CarouselModule } from 'ngx-bootstrap';
import { LoginComponent } from './user/login/login.component';
import { FoodInteractionModule } from './Interactions/food-Interaction/food-Interaction.module';
import { UserModule } from './user/user.module';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import {HomePageModule} from './HomePage/HomePage.module';
import { IndexComponent } from './HomePage/index/index.component';
import { UserDiseaseItemComponent } from './user/user-disease/user-disease-item/user-disease-item.component';
import { TabsModule } from 'ngx-bootstrap';

import { PostDetailsComponent } from './communities/post-details/post-details.component';
import { SideEffectEditComponent } from './side-effects/side-effect-edit/side-effect-edit.component';
import { Http } from '@angular/http';


import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';
import { AboutUsComponent } from './shared/components/aboutUs/aboutUs.component';
import { QuestionAndAnswerComponent } from './shared/components/questionAndAnswer/questionAndAnswer.component';
import { UserService } from './shared/services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';





const routes: Routes = [
  {path :'', component : IndexComponent},
  {path :'home', component : IndexComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'questionAndAnswer',component:QuestionAndAnswerComponent},
  {path:'drug',children:[
    { path: 'listing', component: DrugListingComponent },
    { path:'details/:id' , component :DrugDetailsComponent},
    { path:'addDrug' , component:DrugAddComponent},
    { path:'editDrug/:id' , component:DrugAddComponent},
    {path : 'interaction' , component:DrugInteractionListingComponent}
  ]},
  
  { path: 'food', component: FoodItemComponent},
  { path: 'food/add', component: FoodAddComponent},
  { path: 'sideeffectlisting', component: SideEffectsComponent},
  { path: 'sideeffectlisting2', component: SideEffectListingComponent},
  { path:'addsideeffect' , component:SideEffectAddComponent},
  { path: 'interactions/foodinteraction', component: FoodInteractionItemComponent},
  {path :'sideeffect', component:SideEffectItemComponent },
  { path:'editsideeffect/:id' , component :SideEffectEditComponent},

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
 
  {path:'disease',children:[
    { path: 'listing', component: DiseaseLisingComponent },
    { path:"component" ,component:DiseaseComponentComponent},
    { path:'details/:id' , component :DiseaseDetailsComponent},
    { path:'add' , component:DiseaseAddComponent},
    { path:'edit/:id' , component:DiseaseEditComponent},
  ]},

  { path:'addFood' , component :FoodAddComponent},
  { path:'editFood/:id' , component :FoodEditComponent},
  

  {path:'pill',children:[
    { path:'page', component: PillComponent},
    { path:'listing', component: PillListingComponent},
    { path:'details/:id' , component :DrugDetailsComponent},
    { path:'addPill' , component: DrugAddComponent},
    { path:'editPill/:id' , component: PillEditComponent},
  ]},

  {path:'news',children:[
    { path:'page', component: NewsComponent},
    { path:'listing', component: NewsListingComponent},
    { path:'details/:id' , component :NewsDetailsComponent},
    { path:'addNews' , component: NewsAddComponent},
    { path:'editNews/:id' , component: NewsEditComponent},
    
  ]},


  {path:'user',children:[
    {path:'login', component: LoginComponent},
    {path:'signup', component: SignUpComponent},
    {path:'profile', component: UserProfileComponent},
    {path:'addDrug', component: UserDrugAddComponent},
    {path:'editDrug', component: UserDrugEditComponent},
    {path:'drugItem', component: UserDrugItemComponent},
    {path:'diseaseItem', component: UserDiseaseItemComponent},
    {path:'addDisease', component: UserDiseaseAddComponent},
    {path:'editDisease', component: UserDrugEditComponent}





  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent,
    FoodAddComponent,
    FoodListingComponent,
    SingleFoodInteractionComponent,
    FoodAddComponent,
    FoodEditComponent,
    AboutUsComponent,
    QuestionAndAnswerComponent    
],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    DrugsModule,
    DrugInteractionModule,
    DiseaseModule,
    FormsModule,
    ReactiveFormsModule,
    PillModule,
    RouterModule,
    ActiveIngredientModule,
    SideEffectModule,
    SharedModule,
    NewsModule,
    CommunitiesModule,
    RouterModule.forRoot(routes),
    FoodInteractionModule,
    CarouselModule.forRoot(),
    UserModule,
    HomePageModule,
    TabsModule.forRoot(),
    MatSelectModule,
    BrowserAnimationsModule,
    OwlModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    
  
  ],
  providers: [
    DiseaseServiceService,
    ActiveIngredientService,
    BsModalService,
    FoodService,
    UserService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
