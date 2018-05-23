import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugsComponent } from './drugs.component';
import { DrugDetailsComponent } from './drug-details/drug-details.component';
import { DrugListingComponent } from './drug-listing/drug-listing.component';
import { DrugAddComponent } from './drug-add/drug-add.component';
import { DrugItemSmallComponent } from './drug-item-small/drug-item-small.component';
import { AppModule } from '../app.module';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    [FormsModule],
    RouterModule,
    SharedModule

  ],
  declarations: [DrugsComponent,
    DrugDetailsComponent,
    DrugListingComponent,
    DrugAddComponent,
    DrugItemSmallComponent,
    
    ]
})
export class DrugsModule { }
