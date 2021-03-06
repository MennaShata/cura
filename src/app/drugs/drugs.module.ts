import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugsComponent } from './drugs.component';
import { DrugDetailsComponent } from './drug-details/drug-details.component';
import { DrugListingComponent } from './drug-listing/drug-listing.component';
import { DrugAddComponent } from './drug-add/drug-add.component';
import { DrugItemSmallComponent } from './drug-item-small/drug-item-small.component';
import { AppModule } from '../app.module';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule } from 'ngx-bootstrap';
import { DiseaseModule } from '../diseases/disease.module';
import {SideEffectModule} from './../side-effects/side-effect.module';
import {ActiveIngredientModule} from './../active-ingredients/active-ingredient.module';
import {FoodInteractionModule} from './../Interactions/food-Interaction/food-Interaction.module';
import {MatSelectModule} from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap';
import {FoodInteractionCarouselComponent} from '../shared/components/food-interaction-carousel/food-interaction-carousel.component';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  imports: [
    CommonModule,
    DiseaseModule,
    SideEffectModule,
    ActiveIngredientModule,
    FoodInteractionModule,
    [FormsModule],
    [ReactiveFormsModule],
    RouterModule,
    SharedModule,
    [PaginationModule.forRoot()],
    MatSelectModule,
    [TypeaheadModule.forRoot()],
    [BsDatepickerModule.forRoot()],
    OwlModule

  ],
  declarations: [DrugsComponent,
    DrugDetailsComponent,
    DrugListingComponent,
    DrugAddComponent,
    DrugItemSmallComponent,
    
    ]
})
export class DrugsModule { }
