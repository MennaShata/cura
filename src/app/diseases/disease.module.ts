import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiseaseAddComponent } from './disease-add/disease-add.component';
import { DiseaseLisingComponent } from './disease-lising/disease-lising.component';
import { DiseaseDetailsComponent } from './disease-details/disease-details.component';
//import { DiseaseSmallItemComponent } from './diseases/disease-small-item/disease-small-item.component';
import { DiseaseSmallItemComponent } from './disease-small-item/disease-small-item.component';
import { TreatedDrugsComponent } from './treated-drugs/treated-drugs.component';
import { OneTreatedDrugComponent } from './one-treated-drug/one-treated-drug.component';
import { OneForbiddenDrugComponent } from './one-forbidden-drug/one-forbidden-drug.component';
import { ForbiddenDrugsComponent } from './forbidden-drugs/forbidden-drugs.component';
<<<<<<< HEAD
//import { LatestNewsComponent } from '../shared/components/latest-news/latest-news.component';
=======
>>>>>>> fb4d8cca702e4f8507a1c2e57b08de1ee8f2cc1e
import { DiseaseEditComponent } from './disease-edit/disease-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DiseaseComponentComponent } from './disease-component/disease-component.component';
import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    [ReactiveFormsModule],
    RouterModule,
    SharedModule
  ],
  
  declarations: [DiseaseAddComponent, DiseaseLisingComponent, DiseaseDetailsComponent,
    DiseaseSmallItemComponent,
    TreatedDrugsComponent,
    OneTreatedDrugComponent,
    OneForbiddenDrugComponent,
    ForbiddenDrugsComponent,
    DiseaseSmallItemComponent,
    DiseaseEditComponent,
    DiseaseComponentComponent
],
exports : [
    DiseaseSmallItemComponent,
    DiseaseEditComponent,
    DiseaseDetailsComponent

  ]
})
export class DiseaseModule { }
