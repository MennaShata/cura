import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugInteractionComponent } from './drug-interaction.component';
import { DrugInteractionListingComponent } from './drug-Interaction-Listing/drug-Interaction-Listing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DrugInteractionComponent,
    DrugInteractionListingComponent
]
})
export class DrugInteractionModule { }
