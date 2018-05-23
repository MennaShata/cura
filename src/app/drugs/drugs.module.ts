import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugsComponent } from './drugs.component';
import { DrugDetailsComponent } from './drug-details/drug-details.component';
import { DrugListingComponent } from './drug-listing/drug-listing.component';
import { DrugAddComponent } from './drug-add/drug-add.component';
import { DrugItemSmallComponent } from './drug-item-small/drug-item-small.component';
import {SearchComponent} from './../shared/search/search.component'; 
import { AppModule } from '../app.module';
import {FilterComponent} from './../shared/filter/filter.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    [FormsModule],
    RouterModule,
  ],
  declarations: [DrugsComponent,
    DrugDetailsComponent,
    DrugListingComponent,
    DrugAddComponent,
    DrugItemSmallComponent,
    SearchComponent,
    FilterComponent
    ]
})
export class DrugsModule { }
