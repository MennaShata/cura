import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiseaseAddComponent } from './disease-add/disease-add.component';
import { DiseaseLisingComponent } from './disease-lising/disease-lising.component';
import { DiseaseDetailsComponent } from './disease-details/disease-details.component';
<<<<<<< HEAD
//import { DiseaseSmallItemComponent } from './diseases/disease-small-item/disease-small-item.component';
import { DiseaseSmallItemComponent } from './disease-small-item/disease-small-item.component';
=======
>>>>>>> 17aa4d83eabfd3516de91a71b94187310bd3abcb

@NgModule({
  imports: [
    CommonModule
  ],
<<<<<<< HEAD
  declarations: [DiseaseAddComponent, DiseaseLisingComponent, DiseaseDetailsComponent,
    DiseaseSmallItemComponent
=======
  declarations: [
    DiseaseAddComponent, 
    DiseaseLisingComponent, 
    DiseaseDetailsComponent,
>>>>>>> 17aa4d83eabfd3516de91a71b94187310bd3abcb
]
})
export class DiseaseModule { }
