import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillComponent } from './pill.component';
import { PillListingComponent } from './pill-listing/pill-listing.component';
import { PillItemComponent } from './pill-item/pill-item.component';
import { PillInfoComponent } from './pill-info/pill-info.component';
import { PillSearchComponent } from './pill-search/pill-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PillComponent,
    PillListingComponent,
    PillItemComponent,
    PillInfoComponent,
    PillSearchComponent
]
})
export class PillModule { }
