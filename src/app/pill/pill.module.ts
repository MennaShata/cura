import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillComponent } from './pill.component';
import { PillListingComponent } from './pill-listing/pill-listing.component';
import { PillItemComponent } from './pill-item/pill-item.component';
import { PillInfoComponent } from './pill-info/pill-info.component';
import { PillSearchComponent } from './pill-search/pill-search.component';
import { RouterModule} from '@angular/router';
import { PillEditComponent } from './pill-edit/pill-edit.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    [ReactiveFormsModule]
  ],
  declarations: [
    PillComponent,
    PillListingComponent,
    PillItemComponent,
    PillInfoComponent,
    PillSearchComponent,
    PillEditComponent
]
})
export class PillModule { }
