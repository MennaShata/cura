import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiseaseAddComponent } from './disease-add/disease-add.component';
import { DiseaseLisingComponent } from './disease-lising/disease-lising.component';
import { DiseaseDetailsComponent } from './disease-details/disease-details.component';
import { DiseaseComponentComponent } from './disease-item/disease-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DiseaseAddComponent, 
    DiseaseLisingComponent, 
    DiseaseDetailsComponent,
    DiseaseComponentComponent,
]
})
export class DiseaseModule { }
