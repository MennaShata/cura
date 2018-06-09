import { NgModule ,Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DrugInteractionComponent } from './drug-interaction.component';
import { DrugInteractionListingComponent } from './drug-Interaction-Listing/drug-Interaction-Listing.component';
import { DrugInteractionItemComponent } from './drug-interaction-item/drug-interaction-item.component';
import { TypeaheadModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    [FormsModule],
    BrowserModule,
    [TypeaheadModule.forRoot()]
  ],
  declarations: [
    DrugInteractionComponent,
    DrugInteractionListingComponent,
    DrugInteractionItemComponent,
    
]
})
export class DrugInteractionModule { 
 
}
