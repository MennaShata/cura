import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiseaseAddComponent } from './disease-add/disease-add.component';
import { DiseaseLisingComponent } from './disease-lising/disease-lising.component';
import { DiseaseDetailsComponent } from './disease-details/disease-details.component';
import { DiseaseComponentComponent } from './disease-component/disease-component.component';
import { FilterComponent } from '../shared/filter/filter.component';
import { DiseaseSmallItemComponent } from './disease-small-item/disease-small-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DiseaseAddComponent, 
    DiseaseLisingComponent, 
    DiseaseDetailsComponent,
    FilterComponent,
    DiseaseSmallItemComponent,
    DiseaseComponentComponent
]
})
export class DiseaseModule { }
