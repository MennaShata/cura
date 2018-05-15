import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugsComponent } from './drugs.component';
import { DrugDetailsComponent } from './drug-details/drug-details.component';
import { DrugListingComponent } from './drug-listing/drug-listing.component';
import { DrugAddComponent } from './drug-add/drug-add.component';
import { DrugItemSmallComponent } from './drug-item-small/drug-item-small.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DrugsComponent,
    DrugDetailsComponent,
    DrugListingComponent,
    DrugAddComponent,
    DrugItemSmallComponent
]
})
export class DrugsModule { }
