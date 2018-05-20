import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillComponent } from './pill.component';
import { PillListingComponent } from './pill-listing/pill-listing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PillComponent,
    PillListingComponent
]
})
export class PillModule { }
